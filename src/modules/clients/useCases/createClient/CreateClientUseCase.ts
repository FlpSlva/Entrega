import { hash } from "bcrypt";
import {prisma} from "../../../database/prismaClient";


interface ICreateClient{
    username: string
    password: string
}

class CreateClientUseCase{

    async execute({username, password}: ICreateClient) {

        const clientAlreadyExists = await prisma.clients.findFirst({
            where:{
                username: {
                    mode: "insensitive"
                }
            }
        })

        if(clientAlreadyExists) throw new Error("Client Already Exists !")

        const hashPassword = await hash(password, 10);


        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return client.id;

    }

}

export {CreateClientUseCase};