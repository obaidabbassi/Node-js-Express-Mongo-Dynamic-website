

const mongoose= require("mongoose");


const ProductsSchema=new mongoose.Schema({

productName:{type:String},

productPrice:{type:Number},

productDes:{type:String},

productQuantity:{type:Number},

productDiscount: Number,
productAvailable:Boolean,

productUrl:[
               
    {

        url:String,
    },


],
})

const product=mongoose.model('productList',ProductsSchema)
module.exports=product;