import { hash } from "bcrypt";
import { AppError } from "../../../../errors/App.Error";
import {prisma} from "../../../../database/prismaClient";


interface ICreateClient{
    username: string
    password: string
}

class CreateClientUseCase{

    async execute({username, password}: ICreateClient) {

        const clientAlreadyExists = await prisma.clients.findFirst({
            where:{
                username: {

                }
            }
        })

      if(clientAlreadyExists){
        throw new AppError("Username or Password Invalid !")
    } 

        const hashPassword = await hash(password, 10);


        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return client;

    }

}

export {CreateClientUseCase};