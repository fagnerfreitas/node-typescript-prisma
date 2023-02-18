import { cars } from "@prisma/client";
import { randomUUID } from "crypto";
import { prisma } from "../../../../prisma/prisma";


class CreateCarUseCase {

    constructor() { }

    async execute({ name, description, daily_rate, license_plate, number_doors, fine_amount, id_brand, year, transmission, direction, engine_power, car_type, end_plate, fuel, color, only_owner, car_value }: cars): Promise<cars> {

        console.log(name);

        const response = await prisma.cars.create({
            data: {
                id:randomUUID(),
                name,
                description,
                daily_rate,
                license_plate,
                number_doors,
                fine_amount,
                year,
                transmission,
                direction,
                engine_power,
                car_type,
                end_plate,
                fuel,
                color,
                only_owner,
                car_value,
                brand:''
            }
        })

        return response;
    }
}

export { CreateCarUseCase }