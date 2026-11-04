import crypto from 'node:crypto';
import { NextRequest } from 'next/server';
import { getUserByIdFromDb } from './db';

const AUTH_SECRET = process.env.AUTH_SECRET || 'globrands_enterprise_auth_secret_jwt_2026';

/**
 * Hashes a plaintext password using PBKDF2 with a random salt
 */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');
  return `${salt}:${hash}`;
}

/**
 * Verifies a plaintext password against a stored salt:hash string
 */
export function verifyPassword(password: string, storedHash: string): boolean {
  if (!storedHash || !storedHash.includes(':')) return false;
  const [salt, originalHash] = storedHash.split(':');
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');
  return hash === originalHash;
}

export interface SessionUser {
  id: string;
  name: string;
  company_name: string;
  email: string;
  role: 'client' | 'admin';
  phone?: string;
  city?: string;
}

/**
 * Creates a signed, base64-encoded session token
 */
export function createSessionToken(user: SessionUser): string {
  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    company: user.company_name,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
  };

  const payloadStr = JSON.stringify(payload);
  const signature = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(payloadStr)
    .digest('hex');

  const token = Buffer.from(JSON.stringify({ payload, signature })).toString('base64');
  return token;
}

/**
 * Decodes and verifies a signed session token
 */
export function verifySessionToken(token: string): SessionUser | null {
  try {
    const raw = Buffer.from(token, 'base64').toString('utf-8');
    const { payload, signature } = JSON.parse(raw);

    const expectedSignature = crypto
      .createHmac('sha256', AUTH_SECRET)
      .update(JSON.stringify(payload))
      .digest('hex');

    if (signature !== expectedSignature) {
      return null;
    }

    if (Date.now() > payload.exp) {
      return null;
    }

    return {
      id: payload.userId,
      email: payload.email,
      role: payload.role,
      name: payload.name,
      company_name: payload.company
    };
  } catch {
    return null;
  }
}

/**
 * Extracts the authenticated user from cookies or Authorization header
 */
export async function getAuthenticatedUser(req: NextRequest): Promise<SessionUser | null> {
  // Check auth cookie
  const cookieToken = req.cookies.get('globrands_auth_token')?.value;
  if (cookieToken) {
    const verified = verifySessionToken(cookieToken);
    if (verified) return verified;
  }

  // Check Authorization Bearer header
  const authHeader = req.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    const verified = verifySessionToken(token);
    if (verified) return verified;
  }

  return null;
}

