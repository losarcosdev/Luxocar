import { db } from "@/database";
import User from "@/models/User";
import { jwt } from "@/utils";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your-email@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret:
    "fc66c397760dd813df9a084141d18e73d012fb51f2d08bc0f6df4ae93e1faa76b5cfbee43399d216e1300651bf60f80ef4d90d3a390a402161d41d2005e4062d",

  session: {
    maxAge: 2592000,
  },

  callbacks: {
    async signIn({ user, account, profile }): Promise<any> {
      const authUser = user as any;

      await db.connect();
      const existingUser = await User.findOne({ email: authUser.email }).lean();
      await db.disconnect();

      if (!existingUser) {
        const password = authUser.password || "####"; // Contraseña predeterminada si no se proporciona

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.connect();
        const newUser = await User.create({
          email: authUser.email,
          password: hashedPassword,
          name: authUser.name,
          image: authUser.image,
          role: "client",
        });

        await db.disconnect();

        const accessToken = jwt.signJwtAccessToken({ ...newUser });

        // Devuelve el nuevo usuario
        return {
          accessToken,
          ...newUser,
        };
      }

      const accessToken = jwt.signJwtAccessToken(existingUser);

      // Si el usuario ya existe, simplemente lo devuelve
      return {
        accessToken,
        ...existingUser,
      };
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }): Promise<any> {
      const sessionUser = await User.findOne({ email: session.user.email });

      if (!sessionUser) return;

      session.user.id = sessionUser._id.toString();

      return session;
    },
  },
});

export { authOptions as GET, authOptions as POST };
