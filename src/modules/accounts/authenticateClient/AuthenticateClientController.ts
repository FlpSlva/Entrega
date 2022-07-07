import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";





class AuthenticateClientController{

    async handle(request: Request, response: Response){
        const {username, password} = request.body;
        const createClientUseCase = new AuthenticateClientUseCase();
        const result = await createClientUseCase.execute({
            username,
            password
        })

        if(!result){
          
        throw new Error("password or username invalid !");
            
        } 

        return response.status(201).json({result});
    }


}

export {AuthenticateClientController};