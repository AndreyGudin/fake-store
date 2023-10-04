import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  let url = req.nextUrl.clone();

  if (token === process.env.TOKEN && req.nextUrl.pathname !== "/login")
    return NextResponse.next();
  if (token === process.env.TOKEN && req.nextUrl.pathname === "/login") {
    url.pathname = "/products";
    return NextResponse.redirect(url);
  }
  if (req.nextUrl.pathname !== "/login") {
    url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/products", "/", "/login"],
};
