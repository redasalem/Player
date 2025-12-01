import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // ✅ إضافة هذا السطر الأساسي
  secret: process.env.NEXTAUTH_SECRET,
  // ✅ إضافة callbacks للتأكد من عمل Session
  callbacks: {
    async session({ session, token }) {
      return session;
    },
  },
}

export default NextAuth(authOptions)