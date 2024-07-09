import { Schema,Model } from "mongoose";
const profileSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        deafult:""
    },
    skills:{
        type:Array,
        deafult:[]
    },
    funFacts:{
        type:Array,
        deafult:[]
    },
    X:{
        type:String,
        deafult:""
    },
    facebook:{
        type:String,
        deafult:""
    },
    instagram:{
        type:String,
        deafult:""
    }
})
const profile=Model("profile",profileSchema)
export default profile