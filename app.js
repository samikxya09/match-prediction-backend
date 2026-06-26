//import express from 'express' //es syntax
const express= require("express")// cjs(common js) system
const { userController, Registeruser, Loginuser } = require("./controllers/userController.js")
const { fetchteams, Registerteam, deleteteams } = require("./controllers/teamContoller.js")
const registermatch = require("./controllers/matchController.js")
const app=express()
app.use(express.json())


require("./database/connection.js")
//const app=require("express")()//

app.get("/about",userController)

app.post("/createteam",Registerteam)
app.get("/fetch-teams",fetchteams)
app.delete("/delete-team/:id",deleteteams)
app.post("/register",Registeruser)
app.post("/login",Loginuser)
app.post("/team-match",registermatch)
app.listen(3000,function(){
    console.log("project started sucessfully at port 3000")
})
//export default express //es syntax
//module.exports =express //cjs
