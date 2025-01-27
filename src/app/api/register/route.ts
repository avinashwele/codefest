import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Registration, { IRegistration } from '@/models/Registration';

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body: IRegistration = await req.json();
    const registration = await Registration.create(body);
    return NextResponse.json({ success: true, data: registration }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
