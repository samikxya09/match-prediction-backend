//import express from 'express' //es syntax
const express= require("express")// cjs(common js) system
const { userController, Registeruser, Loginuser } = require("./controllers/userController.js")
const { fetchteams, Registerteam, deleteteams } = require("./controllers/teamContoller.js")
const {registermatch,fetchmatches, deletematches} = require("./controllers/matchController.js")
const authenticationmiddleware = require("./middleware/middleware.js")
const app=express()
app.use(express.json())


require("./database/connection.js")
//const app=require("express")()//

app.get("/about",userController)

app.post("/register",Registeruser)
app.post("/login",Loginuser)

app.post("/createteam",authenticationmiddleware,Registerteam)
app.get("/fetch-teams",authenticationmiddleware,fetchteams)
app.delete("/delete-team/:id",authenticationmiddleware,deleteteams)




app.post("/team-match",Registerteam)
app.get("/fetchteam",fetchmatches)
app.delete("deletematch",deletematches)

app.listen(3000,function(){
    console.log("project started sucessfully at port 3000")
})
//export default express //es syntax
//module.exports =express //cjs
