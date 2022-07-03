import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";





class CreateClientController{

    async handle(request: Request, response: Response){
        const {username, password} = request.body;
        const createClientUseCase = new CreateClientUseCase();
        const result = await createClientUseCase.execute({
            username,
            password
        })

        if(!result) throw new Error;

        return response.status(201).json({result});
    }


}

export {CreateClientController};