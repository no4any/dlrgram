import authUser from "@/src/user/opertations/authUser.function"
import NextAuth from "next-auth"
import { AuthOptions } from "next-auth/core/types"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  secret: "secretsecret",
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Usrename" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const user: boolean = await authUser(credentials?.username || "", credentials?.password || "")
          if (user) {
            return { id: "1", name: credentials?.username || "", email: "noreply@test.com" }
          }
          return null;
        } catch (e) {
          return null;
        }
      }
    })
  ],
}

export default NextAuth(authOptions)