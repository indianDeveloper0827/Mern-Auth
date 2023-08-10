import express from "express";
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";

    dotenv.config()
const port = process.env.PORT || 5000;

const app = express();


app.use('/api/users',userRoutes)
app.get('/',(req,res) => res.send("Yes server is ready"))


app.use(notFound)
app.use(errorHandler)

app.listen(port,() =>  console.log(`app is listen on PORT ${port}`))