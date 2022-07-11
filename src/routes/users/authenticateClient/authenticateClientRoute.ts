import { Router } from "express";
import { AuthenticateClientController } from "../../../modules/accounts/authenticateClient/AuthenticateClientController";




const authenticateClientRoute = Router()
const authenticateClientController = new AuthenticateClientController();

authenticateClientRoute.post("/authenticate", authenticateClientController.handle)


export {authenticateClientRoute};