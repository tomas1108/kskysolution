// middleware/token.ts
import { NextRequest, NextResponse } from 'next/server';
import { getTokenNew } from '~/action/api';

export async function middleware(req: NextRequest) {
  try {
    
    const token = await getTokenNew();
    if (!token) {
      return NextResponse.json({ message: 'Token not found' }, { status: 401 });
    }
    // set token in header
    const modifiedReq = req.clone();
    modifiedReq.headers.set('Authorization', `Bearer ${token}`);

    return NextResponse.next({
      request: modifiedReq,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching token' }, { status: 500 });
  }
}
