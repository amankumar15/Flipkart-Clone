// import expresss
import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import DefaultData from './default.js';
import Router from './routes/route.js';


const app = express();
// express as a function
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router);

dotenv.config();



const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
// using listen funtion you can make express serverr it has two arguments 1.port 2. call back funtion.
DefaultData();