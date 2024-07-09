import {Schema,Model} from "mongoose";
const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})
const user=Model("user",userSchema)
export default user