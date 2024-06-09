import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("pb_auth");

  if (currentUser && !request.nextUrl.pathname.startsWith("/app")) {
    return Response.redirect(new URL("/app", request.url));
  }

  if (currentUser && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/app", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = { matcher: ["/app/:path*", "/login"] };
