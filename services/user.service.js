const User = require("../models/user.model")

const createNewUser= async({name,email, passwordHash,isAdmin})=>{
   try{
    return await User.create({name,email, passwordHash,isAdmin});
   }
   catch(error){
    return error;
   }
}

const findUserByEmail=async(email)=>{
    return await User.findOne({email});
}
const findAllUsers=async()=>{
    return await User.find();
    }
 

module.exports={
    createNewUser,
    findUserByEmail,
    findAllUsers
}