import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { hashPassword, createSessionToken } from '@/lib/auth';
import { getUserByEmailFromDb, createUserInDb } from '@/lib/db';

const RegisterSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Valid work email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  city: z.string().optional(),
  gstin: z.string().optional(),
  role: z.enum(['client', 'admin']).default('client')
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = RegisterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, companyName, email, phone, password, city, gstin, role } = parsed.data;

    // Check if user already exists
    const existing = await getUserByEmailFromDb(email);
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'An account with this email address already exists.' },
        { status: 409 }
      );
    }

    const passwordHash = hashPassword(password);
    const userId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;

    const newUser = await createUserInDb({
      id: userId,
      name,
      company_name: companyName,
      email,
      phone,
      password_hash: passwordHash,
      role,
      city: city || 'Bengaluru',
      gstin: gstin || ''
    });

    const sessionUser = {
      id: newUser.id,
      name: newUser.name,
      company_name: newUser.company_name,
      email: newUser.email,
      role: newUser.role,
      phone: newUser.phone,
      city: newUser.city
    };

    const token = createSessionToken(sessionUser);

    const response = NextResponse.json(
      {
        success: true,
        message: 'Account created successfully',
        user: sessionUser,
        token
      },
      { status: 201 }
    );

    // Set HTTP-only session cookie
    response.cookies.set('globrands_auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create account' },
      { status: 500 }
    );
  }
}

