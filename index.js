import mongoose from 'mongoose';
import express, { response } from 'express';
import * as dotenv from 'dotenv';

import kodersRouter from './routers/koders.router.js';

dotenv.config() //Cargar todas las variables de entorno

const {DB_USER, DB_PASSWORD, DB_NAME, DB_HOST} = process.env //Destructuramos las variables de entorno

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const server = express() // Con esto creamos un servidor de express

//middleware
server.use(express.json())

//Routers or endpoints

server.use('/koders', kodersRouter)


mongoose.connect(URL) //Con esto nos conectamos al server de mongodb usando mongoose
    .then((connection) => {
        console.log('Connection established :D')
        server.listen(8080, () => {
            console.log('Listening on port 8080')
        })
    })
    .catch(err => console.error('Error: ', err))