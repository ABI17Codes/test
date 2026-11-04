import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyPassword, createSessionToken } from '@/lib/auth';
import { getUserByEmailFromDb } from '@/lib/db';

const LoginSchema = z.object({
  email: z.string().email('Valid work email is required'),
  password: z.string().min(1, 'Password is required')
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = LoginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;

    const user = await getUserByEmailFromDb(email);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    const passwordValid = verifyPassword(password, user.password_hash);
    if (!passwordValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    const sessionUser = {
      id: user.id,
      name: user.name,
      company_name: user.company_name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      city: user.city
    };

    const token = createSessionToken(sessionUser);

    const response = NextResponse.json({
      success: true,
      message: 'Logged in successfully',
      user: sessionUser,
      token
    });

    response.cookies.set('globrands_auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Login failed' },
      { status: 500 }
    );
  }
}

