import { NextResponse } from 'next/server';
import { isAuth } from './lib/auth';

export function middleware(request) {
  if (!isAuth(request.cookies)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // loginse isteği normal akışına devam ettir
  return NextResponse.next();
}

export const config = {
  matcher: ['/panel/:path*', '/dashboard/:path*'],
};
