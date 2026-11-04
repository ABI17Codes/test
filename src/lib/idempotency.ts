import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { 
  getIdempotencyRecord, 
  saveIdempotencyProcessing, 
  saveIdempotencyCompleted, 
  saveIdempotencyFailed 
} from './db';

export interface IdempotencyResult<T = any> {
  isReplay: boolean;
  statusCode: number;
  data: T;
  headers?: Record<string, string>;
}

/**
 * Computes a deterministic SHA256 digest of the request payload
 */
export function hashPayload(payload: any): string {
  const normalized = typeof payload === 'string' ? payload : JSON.stringify(payload || {});
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Executes a route handler wrapped with Idempotency Key protection.
 * Prevents duplicate orders, duplicate payments, or repeated write actions.
 */
export async function withIdempotency(
  req: NextRequest,
  handler: (idempotencyKey: string, parsedBody: any) => Promise<NextResponse>
): Promise<NextResponse> {
  const idempotencyKey = 
    req.headers.get('idempotency-key') || 
    req.headers.get('Idempotency-Key') || 
    req.headers.get('x-idempotency-key') || 
    req.headers.get('X-Idempotency-Key');

  // If operation requires an idempotency key and none provided
  if (!idempotencyKey) {
    return NextResponse.json(
      {
        success: false,
        error: 'Idempotency-Key header is required for this operation.',
        code: 'MISSING_IDEMPOTENCY_KEY',
        hint: 'Generate a unique UUID on the client (e.g. crypto.randomUUID()) and pass it in the Idempotency-Key header.'
      },
      { status: 400 }
    );
  }

  // Parse body safely
  let rawBody: any = {};
  try {
    rawBody = await req.json();
  } catch {
    rawBody = {};
  }

  const pathname = req.nextUrl.pathname;
  const requestHash = hashPayload(rawBody);

  // 1. Check existing record in PostgreSQL / persistent store
  const existingRecord = await getIdempotencyRecord(idempotencyKey);

  if (existingRecord) {
    // Check if the payload hash matches the original request
    if (existingRecord.request_hash !== requestHash) {
      return NextResponse.json(
        {
          success: false,
          error: 'Idempotency key was previously used with different parameters or payload.',
          code: 'IDEMPOTENCY_KEY_PAYLOAD_MISMATCH',
          key: idempotencyKey
        },
        { status: 422 }
      );
    }

    // If currently processing by another concurrent request
    if (existingRecord.status === 'processing') {
      return NextResponse.json(
        {
          success: false,
          error: 'An identical request is currently processing. Please wait and do not duplicate.',
          code: 'IDEMPOTENT_OPERATION_IN_PROGRESS',
          key: idempotencyKey
        },
        { 
          status: 409,
          headers: {
            'Retry-After': '2'
          }
        }
      );
    }

    // If already completed: return the cached response immediately!
    if (existingRecord.status === 'completed' && existingRecord.response_body) {
      return NextResponse.json(existingRecord.response_body, {
        status: existingRecord.status_code || 200,
        headers: {
          'Idempotent-Replayed': 'true',
          'Idempotency-Key': idempotencyKey,
          'X-Cache-Lookup': 'HIT',
          'Access-Control-Expose-Headers': 'Idempotent-Replayed, Idempotency-Key'
        }
      });
    }
  }

  // 2. Register key as 'processing'
  const acquired = await saveIdempotencyProcessing(idempotencyKey, pathname, requestHash);
  if (!acquired) {
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to acquire lock on idempotency key. Please retry in a moment.',
        code: 'IDEMPOTENCY_LOCK_FAILED'
      },
      { status: 409 }
    );
  }

  // 3. Execute the actual business logic handler
  try {
    const response = await handler(idempotencyKey, rawBody);
    const statusCode = response.status;

    // Clone response to cache body if successful or normal business response
    let responseData: any = null;
    try {
      const cloned = response.clone();
      responseData = await cloned.json();
    } catch {
      responseData = { success: statusCode >= 200 && statusCode < 300 };
    }

    // Save completed result
    await saveIdempotencyCompleted(idempotencyKey, statusCode, responseData);

    // Attach idempotency headers
    response.headers.set('Idempotency-Key', idempotencyKey);
    response.headers.set('Idempotent-Replayed', 'false');

    return response;
  } catch (error: any) {
    // If unexpected failure, mark as failed so it can be retried
    await saveIdempotencyFailed(idempotencyKey);
    console.error(`Error processing idempotent request [${idempotencyKey}]:`, error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal server error while processing request.',
        code: 'INTERNAL_SERVER_ERROR'
      },
      { status: 500 }
    );
  }
}

