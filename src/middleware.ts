import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { getToken } from "next-auth/jwt"

const secret = process.env.JWT_SECRET;

export async function middleware(req: NextRequest) {
  //Check if Token is valid
  const token = await getToken({ req, secret })

  if (!token)
    return NextResponse.redirect(new URL('/login', req.url))

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/courses/mycourses',
    '/userprofile'
  ]
}