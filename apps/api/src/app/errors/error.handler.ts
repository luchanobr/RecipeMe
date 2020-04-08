
import {Response, Request, NextFunction} from 'express'

const errorhandler = (error, req: Request, res: Response, next: NextFunction ) => {

    switch (error.code) {
        case 400:
            res.status(error.code).json(error)
            break;
    
        default:
            res.status(500).json(error)
            break;
    }
  

}


export {errorhandler}