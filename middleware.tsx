// import { NextResponse } from "next/server";

// export function middleware(request){
//     console.log("middleware abc");
//     if(request.nextUrl.pathname!="/login"){
// return NextResponse.redirect(new URL("/login, request.url"))
//     }
    
// }
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Logic: If they are NOT on /login, send them to /login
  if (pathname !== "/login") {
    // Note the fixed quotes below
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. IMPORTANT: Allow the request to continue if they ARE on /login
  return NextResponse.next();
}

// 3. CRITICAL: Exclude static files and images
// Without this, your middleware will try to redirect your CSS and Favicon to /login!
export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],


// matcher: '/about/:path*',
// // if we only do this on  /about  

matcher: [ "/about/:path*", "/studentList/:path*"]
// if we want to multiple path to middle ware. we use here array


};