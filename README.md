App de autenticación usando Next.js, postgreSql, Prisma, React-Hook-Forms, dbcrypt y Next-Auth.
Uso Next-Auth con sistema de credenciales (email, password) que se consultan en base de datos local.
El sistema de login se realiza mediante "middleware", por lo que no se usa client API. Así, no se establece un contexto de autenticación en la app. Solo se establece que algunas páginas serán restringidas mediante login del usuario que se haya registrado previamente.
