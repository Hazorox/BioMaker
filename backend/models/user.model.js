// import {Schema,Model} from "mongoose";
// const userSchema = new Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
// })
// const user=Model("user",userSchema)
// export default user

import mongoose from "mongoose";

// Define a schema for a user document
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

// Create a model for the user collection based on the user schema
const User = mongoose.model('User', userSchema);
export default User