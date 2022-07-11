import { Router } from "express";
import { createDeliverymanRoute } from "./deliveryman/createDeliveryman/createDeliverymanRoute";
import { authenticateClientRoute } from "./users/authenticateClient/authenticateClientRoute";
import { createClientRoute } from "./users/createClient/createClientRoute";


const router = Router();


router.use("/client",createClientRoute);
router.use("/client", authenticateClientRoute)
router.use("/deliveryman", createDeliverymanRoute);

export {router};

