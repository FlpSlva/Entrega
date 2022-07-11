import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/App.Error";


interface ICreateDeliveryman{
    username: string
    password: string
}


class CreateDeliverymanUseCase {
    async execute({password, username}: ICreateDeliveryman){
        const deliverymanAlreadyExists = await prisma.deliveryman.findFirst({
            where:{
                username: {
                    mode: "insensitive",
                },
            },
        })

      if(deliverymanAlreadyExists){
        throw new AppError("Deliveryman Aready Exists !"  )
    } 

        const hashPassword = await hash(password, 10);


        const client = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return client;
    }
}

export {CreateDeliverymanUseCase}