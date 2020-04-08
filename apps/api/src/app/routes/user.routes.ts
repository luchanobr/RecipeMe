import * as express from 'express'
import { findAll, save } from '../controllers/user.controller'


const userRouter = express.Router()


userRouter.get('/', findAll)
userRouter.post('/',save)


export { userRouter }