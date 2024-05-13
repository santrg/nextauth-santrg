import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log(credentials);
        try {
          const userFound = await prisma.User.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (userFound) {
            console.log("USUARIO ENCONTRADO COMPROBANDO PASSWORD");
            const credOk = await bcrypt.compare(
              credentials.password,
              userFound.password
            );
            if (credOk) {
              console.log("CREDENCIALES CORRECTAS");
              // If no error and we have user data, return it
              return {
                id: userFound.id,
                username: userFound.username,
                email: userFound.email,
                password: userFound.password,
              };
            } else {
              console.log("PASSWORD INCORRECTO");
              throw new Error("Fail pasword.");
              //return null;
            }
          } else {
            console.log("NO ENCONTRADO");
            throw new Error("User not found.");
            // Return null if user data could not be retrieved
            //return null;
          }
        } catch (error) {
          console.log("HA OCURRIDO UN ERROR");
        }
      },
    }),
  ],
  pages: {
    signIn: "../../../frontend/login",
    signOut: "../../,,/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
