// const User = require('../../backend/models/user'); // Adjust the path as needed

import User from "../../backend/models/user"
const getUsers = async (query) => {
    try {
        const user = await User.find(query)
        if (user){
            console.log("This user already exists")
        }else{
            const newUser = new User(query)
            await newUser.save()
        }
    } catch (err) {
        console.log(err)
    }
}

export default getUsers