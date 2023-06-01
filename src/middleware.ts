import { NextRequest, NextResponse } from "next/server"


export function middleware(request: NextRequest) {
    console.log('Middle ware is now on!');
    if(request.nextUrl.pathname.startsWith('/products/1004')){
    console.log('Middleware -redirect path');
    return NextResponse.redirect(new URL('/products', request.url));
    }
}

export const config = {
    matcher: ['/products/:path*'],
}