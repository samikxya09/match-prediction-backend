//import express from 'express' //es syntax
const express= require("express")// cjs(common js) system
const { homeController, userController } = require("./controllers/userController.js")
const app=express()

require("./database/connection.js")
//const app=require("express")()//
app.get("/",homeController)
app.get("/about",userController)

app.listen(3000,function(){
    console.log("project started sucessfully at port 3000")
})
//export default express //es syntax
//module.exports =express //cjs
