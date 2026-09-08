import { NextRequest, NextResponse } from 'next/server';
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname === '/en/legal-notice') {
    url.pathname = '/en/mentions-legales';
    return NextResponse.redirect(url, 308);
  }
  if (url.pathname === '/fr' || url.pathname.startsWith('/fr/')) {
    url.pathname = url.pathname.slice(3) || '/';
    return NextResponse.redirect(url, 308);
  }
  if (url.pathname === '/en' || url.pathname.startsWith('/en/')) return NextResponse.next();
  url.pathname = `/fr${url.pathname === '/' ? '' : url.pathname}`;
  return NextResponse.rewrite(url);
}
export const config = { matcher: ['/((?!api(?:/|$)|_next(?:/|$)|.*\\..*).*)'] };
