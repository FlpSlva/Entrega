import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";





class CreateClientController{

    async handle(request: Request, response: Response){
        const {username, password} = request.body;
        const createClientUseCase = new CreateClientUseCase();
        const result = createClientUseCase.execute({
            username,
            password
        })

        return response.json(result);
    }


}

export {CreateClientController};