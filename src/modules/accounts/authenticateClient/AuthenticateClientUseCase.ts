import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { AppError } from "../../../errors/App.Error"
import {prisma} from "../../database/prismaClient"

interface IAuthenticateClient {
    username: string
    password: string
}

class AuthenticateClientUseCase {
    async execute({password, username}: IAuthenticateClient){
        
    const client = await prisma.clients.findFirst({
        where:{
            username
        }
    })

    if(!client){

        throw new AppError("Username or Password invalid !")
    } 

    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) throw new AppError("Username or Password invalid !")


    const token = sign({username}, "698dc19d489c4e4db73e28a713eab07b", {
        subject: client.id,
        expiresIn: "1d"
    })


    return token;



    }
}

export {AuthenticateClientUseCase}