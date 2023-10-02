import { NextRequest, NextResponse } from "next/server";

const secToken = "eyJhbGciOiJIUzI1NiIsInR";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (token === secToken) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/products", "/"],
};
