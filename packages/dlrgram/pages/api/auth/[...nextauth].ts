import NextAuth from "next-auth"
import { AuthOptions } from "next-auth/core/types"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions:AuthOptions = {
  secret: "secretsecret",
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Usrename" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          if (user) {
            return user
          } else {
            return null
          }
        }
      })
  ],
}

export default NextAuth(authOptions)