const { users } = require("../database/connection")

function userController(req,res){
    res.json({msg:"<h1>this is about page</h1>"})
}



function homeController(req,res){
    res.json({
        msg:"this is home"})
    }
//await used garda async used garney
async function Registeruser(req,res){
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    //const {email,name,pass}=req.body  alternartive

    await users.create({
        name: name,  //left sude(columnname) : rightside(value)
        email:email,
        password:password,
    })
    res.status(200).json({
        message:"register is called"
    })
}
function Loginuser(req,res){
 

    req.status(200).json({
        message:"login user called"
    })
}
module.exports={userController,homeController,Registeruser,Loginuser}