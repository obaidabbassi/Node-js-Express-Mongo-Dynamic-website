
const express = require("express");
const app = express();
const mongoose = require("mongoose");


const router = require("express").Router();




const contact = require("../model/ContactUsSchema");
const { findById, find } = require("../model/productsUpload");

const Signup = require("../model/SignupModel");
const Sigin = require("../model/signin");

router.get("/", async (req, res) => {


    res.render("index.hbs")

})

router.get("/index", async (req, res) => {


    res.render("index.hbs")

})



router.get("/contact", (req, res) => {

    res.render("contact.hbs")

})



router.get("/about", (req, res) => {

    res.render("about.hbs")

})





router.post("/contact", (req, res) => {
    try {



        const reg = new contact({


            userName: req.body.name,

            userEmail: req.body.email,
            userPhone: req.body.phone,
            userMessage: req.body.message,
            userDate: new Date


        })

        reg.save().then(() => {

            res.render("contact.hbs",
                {
                    msg: "Data successfully inserted!",
                    val: true,


                })


        });


    } catch (error) {

        console.log(error, "i m error file");

        res.render("error.hbs")
    }


})



router.get("/products", (req, res) => {
    // const getProducts= products.find();

    res.render("products.hbs", {
        //    "us":getProducts,
        "count": 1,

    })

})




router.post("/products", (req, res) => {


    res.render("products.hbs", {


    })

})






router.post("/Signup", (req, res) => {
    const signupSave = new Signup({

        userName: req.body.name,

        userEmail: req.body.email,

        userPhone: req.body.phone,

        userPassword: req.body.password

    })

    signupSave.save().then(() => {

        res.render("Signup.hbs", {


            sup: "Signup Successfully!",

            bol: true


        })

    })
})


router.get("/Signup", (req, res) => {




    res.render("Signup.hbs")

})



router.get("/Signin", (req, res) => {




    res.render("Signin.hbs")

})




router.post("/Signin", async (req, res) => {


    try {

        let findID = await Signup.find();

       let fm=await Signup.findOne({userEmail:req.body.email})
     
        let userName = req.body.email;
        let userPass = req.body.password;


if((fm.userEmail===userName)&&(fm.userPassword===userPass)){


    console.log("data found unlocking...");



    res.render("index.hbs",{

        show:result ,
        userfound:"Login success..."
     })

}


else{


    res.render("Signin.hbs",{
        fal:false,
       error:"failed to login..."
     })


    }

      

    } catch (e) {




    }








})









router.get("*", (req, res) => {

    res.render("error.hbs")

})





module.exports = router;