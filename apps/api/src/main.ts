import * as express from 'express';
import dotenv from 'dotenv'
import {mongoose} from './app/database/mongoDB'

dotenv.config()
const app = express();


const conection = mongoose.connection
conection.on('error',  console.error.bind(console, 'connection error:'))
conection.once('open', function() {
  console.log("conectado a mongoDB" )
})
const port = parseInt(process.env.port, 10) || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
