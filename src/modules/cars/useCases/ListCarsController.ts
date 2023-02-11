import {Request, Response} from 'express';
import { ListCarUseCase } from './ListCarsUseCase';

class ListCarsController {

    constructor(){}

    async handle(request:Request, response:Response){

        const listCarsUseCase = new ListCarUseCase();
        const cars = await listCarsUseCase.execute();
   
        return response.status(201).json(cars);
    }
}

export {ListCarsController}