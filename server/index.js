import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import Connection from "./config/db.js";
import Routes from "./routes/index.js";

dotenv.config();

const app = express();

const USERNAME = "ashish";
const PASSWORD = "ashish121";

const port = 8000;

Connection(USERNAME,PASSWORD);


app.listen(port,()=>{console.log(`Server is up and running on port:${port}`);console.log(USERNAME,PASSWORD)});

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",Routes);