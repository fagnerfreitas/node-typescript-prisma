import { Router } from "express";
import { CreateCarController } from "../modules/cars/useCases/createCar/CreateCarController";
import { ListCarsController } from "../modules/cars/useCases/listCars/ListCarsController";

const carRoutes = Router();
const listCarController = new ListCarsController();
const createCarController = new CreateCarController()

carRoutes.get('/',listCarController.handle);
carRoutes.post('/create',createCarController.handle);

export { carRoutes }
