import { NextResponse } from "next/server";

export function proxy(request) {
  const hasCookie = request.cookies.has("addis_eats_session");

  if (!hasCookie) {
    const signInUrl = new URL("/signin", request.url);

    signInUrl.searchParams.set("next", request.nextUrl.pathname);

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/orders/:path*"],
};
