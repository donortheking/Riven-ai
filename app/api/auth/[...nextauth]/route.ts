import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock user
        if (credentials?.email === "donor@example.com" && credentials?.password === "password") {
          return { id: "1", name: "Donor Onojovwo", email: "donor@example.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/auth",
  },
  session: {
    strategy: "jwt",
  }
});

export { handler as GET, handler as POST };
