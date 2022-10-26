const mongoose=require("mongoose");


const Signin=new mongoose.Schema({


    userName:{type:String,    required:true,},
    
   
    userPassword:{type:String,    required:true,}

})
const Sig=mongoose.model("Sig",Signin)

module.exports=Sig;