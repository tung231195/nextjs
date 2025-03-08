
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { ZodError } from "zod"
import { signInSchema } from "../lib/zod";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {

        try {
          let user = null
          const { email, password } = await signInSchema.parseAsync(credentials)
          console.log('check credentials',credentials,email,password);
          user = {
            email: 'test@gmail.com',
            password: 'aaaaaaaaaaa'
          }
          if (!user) {
            alert('aaaaaa')
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            throw new Error("Invalid credentials.")
          }
          // return user object with their profile data
          return user
        }catch (error) {
          alert('aaaaaa')
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            console.log('check error',error);
  
          }   
          return null
        }
        
      },
    }),
    
  ],
  callbacks: {
    async signIn({ user }) {
      const userData = user as any;
      if (userData?.error) {
        throw new Error(userData?.error);
      }
      return true;
    },
  },
  pages: {
    error: "/error",
  }
});
