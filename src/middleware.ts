import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth_token')
  const isLoginPage = request.nextUrl.pathname === '/login'

  if (!isAuthenticated && !isLoginPage) return NextResponse.redirect(new URL('/login', request.url))

  if (isAuthenticated && isLoginPage) return NextResponse.redirect(new URL('/', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
