import * as express from 'express'
import { userRouter } from './user.routes'


const router = express.Router()


router.use('/api/v1/users', userRouter )


export { router }
