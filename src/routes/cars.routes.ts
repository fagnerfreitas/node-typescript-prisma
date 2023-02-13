import { Router } from "express";
import { ListCarsController } from "../modules/cars/useCases/ListCarsController";

const carRoutes = Router();
const listCarController = new ListCarsController();

carRoutes.get('/',listCarController.handle);

export { carRoutes }
