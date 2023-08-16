import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Yes server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`app is listen on PORT ${port}`));
