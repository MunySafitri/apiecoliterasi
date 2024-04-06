// import module
import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
// import {urls} from './helpers.js'
import jawabanKognitif from "./routes/jawabankognitif-routes.js";
import jawabanSpritual from "./routes/jawabanspritual-routes.js";
import jawabanPpl from "./routes/jawabanppl-routes.js";
import userRoutes from "./routes/user-routes.js";

const PORT = 5000;
const app = express();
const MONGODB_URL = "mongodb+srv://munysafitri:Xrvzo9DrlUYIEtKJ@cluster0.wny76am.mongodb.net/ECO?retryWrites=true&w=majority&appName=Cluster0"

app.use(cors())
app.use(express.json())
app.use("/api/v1/", userRoutes)
app.use("/api/v1/", jawabanPpl)
app.use("/api/v1/", jawabanKognitif)
app.use("/api/v1/", jawabanSpritual)

mongoose.connect(MONGODB_URL)
    .then(() =>
        app.listen(PORT, () => console.log(`Connect to Database Localhost 5000`))
    ).catch((err) => console.log(err))




//Xrvzo9DrlUYIEtKJ