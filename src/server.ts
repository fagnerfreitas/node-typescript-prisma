import express, {Request, Response} from 'express';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const app = express()
const port = 3000

app.get('/', async (req:Request, res:Response) => {

    const brands = await prisma.cars.findMany({
        where:{
           name:'Passat TS'
        }
    })
    res.send(brands);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})