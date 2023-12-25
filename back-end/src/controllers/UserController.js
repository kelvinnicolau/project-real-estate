import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async createUser(request, response) {

    const { name, email, password } = request.body;

    try {
      let user = await prisma.user.findUnique({ where: { email } });

      if (user) {
        return response.json({ 
          error: true,
          message: "Erro: Usuário já existe!" 
        });
      }

      const HashPassword = await hash(password, 8);

      user = await prisma.user.create({
        data: {
          name,
          email,
          password: HashPassword
        }
      });

      return response.json({
        error: false,
        message: "Sucesso: Usuário cadastrado com sucesso!",
        user
      });

    } catch (error) {
      return response.json({ message: error.message })
    }
  },
}