import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController{

    async handle(request:Request, response:Response):Promise<Response>{

        const postCar = request.body;

        const createCaruseCase = new CreateCarUseCase();
        const car = createCaruseCase.execute(postCar);

        return response.status(201).send(car);
    }
}

export { CreateCarController}