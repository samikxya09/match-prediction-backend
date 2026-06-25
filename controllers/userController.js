const { users } = require("../database/connection")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
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
//checking wether the user tryng to register email,tyo email uses table xa ki nai already exist then show error if not register
 const data = await users.findAll({
    where:{
        email:email
    }
}) 
console.log(data)

if(data.length==0){
    console.log(data)
    await users.create({
        name: name,  //left sude(columnname) : rightside(value)
        email:email,
        password:bcrypt.hashSync(password,8)
    })
    res.status(200).json({
        message:"register is called"
    })
}
else{
    res.status(400).json({
        message: "registered with that email already registered,try with another one!"
    })
}
}

 async function Loginuser(req,res){
  const email = req.body.email
  const password =req.body.password
//check email
const data = await users.findAll({
    where:{
        email:email
    }
}) 
console.log(data)
if(data.length ==0){
    res.status(400).json({
        message:"invalid email"

})
}else{
    //email exist,aba password check garney
    const ismatched = bcrypt.compareSync(password,data[0].password)
    if(ismatched){
        //token generation jwt
        const token =jwt.sign({id: data[0].id},"hahahehhuh",{expiresIn : "1d"})
        res.status(200).json({
            message:"logged in successfully",
            token : token

        })
     } else {
        res.status(403).json({
            message:"inavalid password"
        })
     }
}
    req.status(200).json({
        message:"login user called"
    })
}
module.exports={userController,homeController,Registeruser,Loginuser}