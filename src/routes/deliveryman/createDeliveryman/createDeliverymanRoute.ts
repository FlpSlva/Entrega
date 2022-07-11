import { Router } from "express";
import { CreateDeliverymanController } from "../../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";




const createDeliverymanRoute = Router()
const createDeliverymanController = new CreateDeliverymanController();

createDeliverymanRoute.post("/create", createDeliverymanController.handle)


export {createDeliverymanRoute};