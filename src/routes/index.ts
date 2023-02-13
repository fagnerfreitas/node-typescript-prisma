import { Router } from "express";
import { carRoutes } from "./cars.routes";

const router = Router();

router.use('/cars',carRoutes);

export { router }
