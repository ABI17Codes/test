import { NextRequest, NextResponse } from 'next/server';
import { listUsersFromDb, getUserByEmailFromDb, createUserInDb } from '@/lib/db';
import { hashPassword } from '@/lib/auth';
import { CreateUserSchema, formatZodError } from '@/lib/validation/schemas';

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
      return NextResponse.json(formatZodError(parsed.error), { status: 400 });
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
