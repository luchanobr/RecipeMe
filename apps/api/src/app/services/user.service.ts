import {userRepo, userSchema} from '../models/user.model'
import { NextFunction } from 'express'
import {User} from '@recipeme/api-interfaces'



const findAllUser = async (next: NextFunction) => {

    try {
        const users = await userRepo.find()
        return users
    } catch (error) {
        next(error)
    }
}


const saveUser = async (data: User , next ) => {
    try {
        const user = new userRepo(data)
        const errors = user.validateSync()
        console.log(errors)
        const newUser = await userRepo.create(user)
        return newUser

    } catch (error) {
        next(error)
    }
}

export { findAllUser, saveUser }