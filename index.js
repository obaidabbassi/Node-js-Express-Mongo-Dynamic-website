const express=require("express");
const app=express();
const mongoose=require("mongoose");


const json=app.use(express.json());
const urlec=app.use(express.urlencoded());




const hbs=require("hbs");

const path=require("path");
app.use(express.static("templates/images"));

app.set("view-engine",'hbs');
const tempPath=path.join(__dirname,"templates/views");
const partials=path.join(__dirname,"/templates/partials");

hbs.registerPartials(partials);
app.set("views",tempPath);

const router=require("./templates/routes/routes");

app.use(router);





const Signup = require("./templates/model/SignupModel");

const products = require("./templates/model/productsUpload");






//connection is here
const uri="mongodb://localhost:27017/myapp";
const connection=mongoose.connect(uri).then(()=>{
console.log("successfull");

}).catch((error)=>{


console.log(error,"not connected ...");

})





        
app.post("/contact",(req,res)=>{
    try{
        
       
    
    // const reg=new Register({
    
       
    //     userName:req.body.name,
    
    // userEmail:req.body.email,
    // userPhone:req.body.phone,
    // userMessage:req.body.message,
    // userDate:new Date
    
   
    // })
     console.log();
    reg.save().then(()=>{
    
        res.render("contact.hbs",
        {
            msg:"Data successfully inserted!",
            val:true
    
    })
    
    });
    
    
    }catch(error){
    
    
      
        res.render("error.hbs")
    }
    
            
            })


       





             


         





//-----------------------------Admin panel --------------------------------//



app.get("/admin",async(req,res)=>{

        
        
    const a  =await Register.find();

const getColor=await Color.find();


const setColor=await DarkColor({


color:'red',
// color:req.body.name


})
setColor.save().then(()=>{})




    res.render("admin.hbs",{

        count:a.length,
       getColor:getColor

})


    })








   




app.get("/userMessages",async (req,res)=>{

   
    const msg=await Register.find();
 
 
    // res.render("userMessages.hbs")
  
 res.render("userMessages.hbs",{
         "us":msg,
         "count":1
     })
 
 })
 










 app.get('/proUpload',(req,res)=>{



res.render("proUpload.hbs")



 })






app.post('/proUpload',(req,res)=>{


const productSave=new products({
    productName:req.body.proNm,
    productPrice:req.body.proPr,

    productDes:req.body.proDes,
    
    productQuantity:req.body.proQua,
    
    productDiscount:req.body.proDis,
    productAvailable:true,


})

productSave.save().then(()=>{

res.render("proUpload.hbs",{


})

})









})




 


 












app.listen(3000,()=>{




})
