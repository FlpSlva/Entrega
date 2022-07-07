import { Router } from "express";
import { authenticateClientRoute } from "./authenticateClient/authenticateClientRoute";
import { createClientRoute } from "./createClient/createClientRoute";


const router = Router();


router.use("/client",createClientRoute);

export {router};

