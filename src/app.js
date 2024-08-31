import express from "express";
import cors from "cors"


const app = express();

app.use(cors(
    {
        origin: '*',
        methods: 'GET,POST,PUT,DELETE',
        allowedHeaders: 'Content-Type,Authorization'
    }
));


app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


//import routes

import healthcheckRouter from './routes/healthcheck.routes.js';

//routes
app.use('/api/v1/healthcheck', healthcheckRouter )



export {app} ; 