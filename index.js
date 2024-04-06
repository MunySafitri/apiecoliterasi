// import module
import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import helmet from 'helmet'
import jawabanKognitif from "./routes/jawabankognitif-routes.js";
import jawabanSpritual from "./routes/jawabanspritual-routes.js";
import jawabanPpl from "./routes/jawabanppl-routes.js";
import komentar from "./routes/komentar-router.js";
import userRoutes from "./routes/user-routes.js";
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000;
// const PORT = 26405;
const app = express();
// const MONGODB_URL = "mongodb+srv://munysafitri:Xrvzo9DrlUYIEtKJ@cluster0.wny76am.mongodb.net/ECO?retryWrites=true&w=majority&appName=Cluster0"
const MONGODB_URL = process.env.MONGODB_URL
// const MONGODB_URL = "mongodb://mongo:uXZgcWzfMjjtFNecnMgEjYSksBGyamjV@roundhouse.proxy.rlwy.net:26405"

// dotenv.config()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use("/api/v1/", userRoutes)
app.use("/api/v1/", jawabanPpl)
app.use("/api/v1/", jawabanKognitif)
app.use("/api/v1/", jawabanSpritual)
app.use("/api/v1/", komentar)

mongoose.connect(MONGODB_URL,{
    useUnifiedTopology : true,
    useNewUrlParser: true
})
    .then(() =>
        app.listen(PORT, () => console.log(`Connect to Database Localhost ${PORT}`))
    ).catch((err) => console.log(err))




//Xrvzo9DrlUYIEtKJ
