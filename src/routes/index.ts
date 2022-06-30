import { Router } from "express";
import { createClientRoute } from "./createClient/createClientRoute";


const router = Router();


router.use("/client",createClientRoute);

export {router};

