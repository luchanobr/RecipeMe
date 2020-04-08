import * as mongoose from 'mongoose'
import dotenv from 'dotenv'

import * as mongoosePaginate from "mongoose-paginate-v2"

dotenv.config()

mongoose.connect( process.env.MONGODB , {useNewUrlParser: true}).then(()=> {
    //
}).catch( err => {
    console.log(err)
})
  
mongoosePaginate.paginate.options = {
    lean: true,
    limit: 50
}

mongoose.plugin(mongoosePaginate) 

export { mongoose }