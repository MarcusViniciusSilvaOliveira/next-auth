import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Methods from "../../../api/api";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async signIn({ user }) {
      Methods.Create('users', { email: user.email });
      return true;
    }
  },
  secret: process.env.JWT_SECRET
}
export default NextAuth(authOptions)