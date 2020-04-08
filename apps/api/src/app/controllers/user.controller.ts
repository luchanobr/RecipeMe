import {Response, Request, NextFunction} from 'express';
import {findAllUser, saveUser} from '../services/user.service'


const findAll = async (req: Request, res: Response, next:NextFunction) =>{

    try {
        const users = await findAllUser(next)  
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

const save = async (req: Request, res: Response, next:NextFunction) => {
    try {
       const user = req.body
       const newUser = await saveUser(user, next) 
       res.status(201).json(newUser)

    } catch (error) {
        next(error)
    }
}



export { findAll,save }