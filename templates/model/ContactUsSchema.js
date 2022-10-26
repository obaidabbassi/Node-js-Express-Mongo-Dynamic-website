const mongoose=require('mongoose');
const StudentSchema=new mongoose.Schema({

userName:{
    type:String,
    required:true,

},

userEmail:{type:String,
    required:true,

},

userPhone:{type:Number,
    required:true,

},

userMessage:{type:String,

    required:true,
},

userDate: Date,

})

const contact=mongoose.model('ContactForm',StudentSchema);
module.exports=contact;