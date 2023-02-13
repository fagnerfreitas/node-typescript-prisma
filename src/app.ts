import express, { NextFunction,Request,Response } from 'express';
import { AppError } from './error/AppError';
import { router } from './routes';
const app = express()

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof AppError) {
   
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Interval server error - ${err.message}`
    })
});

export { app }