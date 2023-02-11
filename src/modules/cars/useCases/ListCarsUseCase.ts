import { cars } from "@prisma/client";
import { prisma } from '../../../prisma/prisma'

 class ListCarUseCase{

    async execute():Promise<cars[]>{

        const cars = await prisma.cars.findMany();
        return cars;

    }
 }


 export { ListCarUseCase }