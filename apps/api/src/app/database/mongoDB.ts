import * as mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect( process.env.MONGODB , {useNewUrlParser: true}).then(()=> {
    //
}).catch( err => {
    console.log(err)
})
  
export { mongoose }