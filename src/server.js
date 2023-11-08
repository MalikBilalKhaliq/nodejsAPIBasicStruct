import dotenv from 'dotenv'
import express from 'express';
import mongoose from "mongoose";
import chalk from "chalk";
dotenv.config();
import { connectRoute } from './Routers/index.js';
import defaultMiddleware from './Middlewares/defaultMiddleware.js';
const app = express();
const PORT = process.env.PORT || 8080;

//using Default Middleware

defaultMiddleware(app);
//connecting to Database

// mongoose
//     .connect(`${process.env.url}`)
//     .then(() => console.log(chalk.bgGreen.black("database Connection Successful" + `http://localhost:${PORT}`)));

//connecting Router
connectRoute(app);

app.get("/", (req, res) => {
    res.send("hey don't worry I am working fine!");
});

app.use((error, req, res, next) => {
    res.json({ error: error.message });
    next();
});

app.listen(PORT,(error,data)=>{
    if(error){
        console.log("Error Occured:" + error);
    }else{
        console.log(chalk.bgGreen.black("Server Created Successful" + `http://localhost:${PORT}`));
    }
});