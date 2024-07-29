import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  let url = req.nextUrl.clone();

  if (req.nextUrl.pathname === "/") {
    url = req.nextUrl.clone();
    url.pathname = "/products";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/"],
};
