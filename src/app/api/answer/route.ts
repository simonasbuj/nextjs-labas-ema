"use server"

import { NextResponse } from 'next/server';
import { db } from '@/db/drizzle';
import { answers } from '@/db/schema';

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';  

    await db.insert(answers).values({ ip: ip, answer: 'taip' }).execute();

    return NextResponse.json({ message: 'Inserted!' + forwardedFor }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
