import {mongoose} from "../database/mongoDB"
import validator from 'validator'
import * as bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const userSchema = new Schema({

    userName : {
        type: String,
        required: [true, 'UserName required'],
        minlength: [3, 'Min 3 characters'],
        maxlength: [15, 'Max 15 characeres'],
        validate: {
            validator: function(v){
                return validator.isAlphanumeric(v)
            }, message:"UserName is alphanumeric"
        }, unique: true
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        validate: {
            validator: function(v){
                return validator.isEmail(v)
            }, message: "invalid Email"
        }, unique: true
    }, 
    password: {
    type: String,
    required: [true, "Password required"],
    minlength: [3, 'Min 3 characters'],
    maxlength: [15, 'Max 15 characeres'],
    select: false,

    }

}, {
    timestamps: true
})

userSchema.pre('save',  async function(next){
    (this as any).password = await bcrypt.hash((this as any).password, 10);
    next();
})

const userRepo = mongoose.model("user", userSchema);


export { userRepo, userSchema }