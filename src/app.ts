import express, {Request, Response} from 'express';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
const app = express()

app.get('/', async (req:Request, res:Response) => {
    const brands = await prisma.cars.findMany()
    res.send(brands);
})

export { app }