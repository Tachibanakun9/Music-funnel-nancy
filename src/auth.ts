import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import google from "next-auth/providers/google"
import { dbConnetc } from "../dbConnect"
import bcrypt from "bcryptjs"



export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(dbConnetc),
  session:{ strategy: "jwt" },
  providers: [ 
    google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    credentials({

    })
 ],
})