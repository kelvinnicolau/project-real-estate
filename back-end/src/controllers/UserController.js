import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
    async createUser(request, response){

        const { name, email, password } = request.body

        try {
            const user = await prisma.user.findUnique({ where: { email} });

            if(!user){
                return response.json({ message: "Usuário não existe"});
            }

            user = await prisma.user({
                data: {
                    name,
                    email,
                    password
                }
            });

            return response.json(user);

        } catch (error) {
            return response.json({ message: error.message })
        }
    }
}