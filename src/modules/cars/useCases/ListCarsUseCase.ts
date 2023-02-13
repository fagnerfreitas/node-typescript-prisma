import { cars } from "@prisma/client";
import { AppError } from "../../../error/AppError";
import { prisma } from '../../../prisma/prisma'

 class ListCarUseCase{

    async execute():Promise<cars[]>{
        
        const cars = await prisma.cars.findMany();
        if(cars.length != 1){
            
             new AppError("User already exists")
        }

        return cars;
    }
 }


 export { ListCarUseCase }