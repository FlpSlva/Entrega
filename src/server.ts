import express, { Request, Response, NextFunction, response } from 'express';
import "express-async-errors"
import { router } from './routes';
import { AppError } from './errors/App.Error';

const app = express();
const port = 3333;
app.use(express.json());
app.use(router);


app.listen(port, () => console.log("server is running on port:", port));