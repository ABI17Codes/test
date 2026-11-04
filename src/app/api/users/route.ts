import { NextRequest, NextResponse } from 'next/server';
import { listUsersFromDb, getUserByEmailFromDb, createUserInDb } from '@/lib/db';
import { hashPassword } from '@/lib/auth';
import { z } from 'zod';

const CreateUserSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Valid work email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  password: z.string().min(6, 'Temporary password must be at least 6 characters').default('Welcome@123'),
  role: z.enum(['client', 'admin']).default('client'),
  city: z.string().optional(),
  gstin: z.string().optional()
});

export async function GET(req: NextRequest) {
  try {
    const users = await listUsersFromDb();
    return NextResponse.json({
      success: true,
      count: users.length,
      users
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CreateUserSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, companyName, email, phone, password, role, city, gstin } = parsed.data;

    const existing = await getUserByEmailFromDb(email);
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'A corporate account with this email already exists' },
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

    return NextResponse.json({
      success: true,
      message: 'Corporate user account created successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        company_name: newUser.company_name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        city: newUser.city,
        gstin: newUser.gstin,
        created_at: newUser.created_at
      }
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create user' },
      { status: 500 }
    );
  }
}
