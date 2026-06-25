//import express from 'express' //es syntax
const express= require("express")// cjs(common js) system
const { homeController, userController, Registeruser, Loginuser } = require("./controllers/userController.js")
const Registerteam = require("./controllers/teamContoller.js")
const app=express()
app.use(express.json())


require("./database/connection.js")
//const app=require("express")()//
app.get("/",homeController)
app.get("/about",userController)

app.post("/createteam",Registerteam)
app.post("/register",Registeruser)
app.post("/login",Loginuser)
app.listen(3000,function(){
    console.log("project started sucessfully at port 3000")
})
//export default express //es syntax
//module.exports =express //cjs
