const mongoose=require("mongoose");


const SignupSchema=new mongoose.Schema({


    userName:{type:String,    required:true,},
    
    userEmail:{type:String,    required:true,},
    userPhone:{type:String,    required:true,},
    userPassword:{type:String,    required:true,}

})


const Signup=mongoose.model("SignupForm",SignupSchema)

module.exports=Signup;