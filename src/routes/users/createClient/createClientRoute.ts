import { Router } from "express";
import { CreateClientController } from "../../../modules/clients/useCases/createClient/CreateClientController";




const createClientRoute = Router()
const createClientController = new CreateClientController();

createClientRoute.post("/create", createClientController.handle)


export {createClientRoute};