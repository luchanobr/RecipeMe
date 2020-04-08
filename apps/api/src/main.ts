import * as express from 'express';
import dotenv from 'dotenv'
import {mongoose} from './app/database/mongoDB'
import * as cors from 'cors'
import * as helmet from 'helmet'
import * as compression from 'compression'
import * as lusca from 'lusca'
dotenv.config()
const app = express();
//config
const port = parseInt(process.env.port, 10) || 3333;

// MongoDB
const conection = mongoose.connection
conection.on('error',  console.error.bind(console, 'connection error:'))
conection.once('open', function() {
  console.log("conectado a mongoDB" )
})

// Middlewares
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'GET,PUT,POST,DELETE,OPTIONS,PACHT',
  allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization'
}))
app.use(helmet())
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));


//Routes



const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
