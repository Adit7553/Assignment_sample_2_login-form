const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("invalid email id")
        //     }
        // }
    },
    password:{
        type:String,
        required:true,
        
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;