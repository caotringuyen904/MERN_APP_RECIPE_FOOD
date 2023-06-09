import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {userRouter} from "./routes/users.js";
import {recipeRouter} from "./routes/recipes.js";



const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);


mongoose.connect("mongodb+srv://21522918:Nguyencaotri23061@recipes.fi1tbyq.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001, () => console.log("SERVER STARTED!"));