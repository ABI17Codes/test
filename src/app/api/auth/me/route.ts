import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser, createSessionToken } from '@/lib/auth';
import { getUserByIdFromDb, getUserByEmailFromDb, updateUserInDb } from '@/lib/db';
import { UpdateProfileSchema, formatZodError } from '@/lib/validation/schemas';

export async function GET(req: NextRequest) {
  try {
    const sessionUser = await getAuthenticatedUser(req);
    if (!sessionUser) {
      return NextResponse.json(
        { success: false, authenticated: false, user: null },
        { status: 401 }
      );
    }

    const dbUser =
      (await getUserByIdFromDb(sessionUser.id)) ||
      (await getUserByEmailFromDb(sessionUser.email));

    const user = dbUser
      ? {
          id: dbUser.id,
          name: dbUser.name,
          company_name: dbUser.company_name,
          email: dbUser.email,
          role: dbUser.role,
          phone: dbUser.phone || '',
          city: dbUser.city || '',
          gstin: dbUser.gstin || '',
          created_at: dbUser.created_at,
        }
      : sessionUser;

    return NextResponse.json({
      success: true,
      authenticated: true,
      user
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const sessionUser = await getAuthenticatedUser(req);
    if (!sessionUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const parsed = UpdateProfileSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(formatZodError(parsed.error), { status: 400 });
    }

    const validData = parsed.data;
    const updated = await updateUserInDb(sessionUser.id, {
      name: validData.name || sessionUser.name,
      company_name: validData.company_name || validData.companyName || sessionUser.company_name,
      phone: validData.phone ?? '',
      city: validData.city ?? '',
      gstin: validData.gstin ?? '',
    });

    const mergedUser = {
      id: sessionUser.id,
      name: updated?.name || validData.name || sessionUser.name,
      company_name: updated?.company_name || validData.company_name || validData.companyName || sessionUser.company_name,
      email: sessionUser.email,
      role: (updated?.role || sessionUser.role) as 'client' | 'admin',
      phone: updated?.phone ?? validData.phone ?? '',
      city: updated?.city ?? validData.city ?? '',
      gstin: updated?.gstin ?? validData.gstin ?? '',
      created_at: updated?.created_at,
    };

    const token = createSessionToken(mergedUser);
    const response = NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      user: mergedUser,
    });

    response.cookies.set('globrands_auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update profile' },
      { status: 500 }
    );
  }
}

