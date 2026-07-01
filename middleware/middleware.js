const jwt = require("jsonwebtoken")

 async function adminauthenticationmiddleware(req,res,next){
//check if user is authenticated(loggedin) or not

const token = req.headers.token
if(!token){
    res.status(403).json({
        message:"please provide token"
    })
}
else{
    //verify the token is exactly correct                                                                                                                                                           
    const result= jwt.verify(token,"hahahehhuh")
     const userid = result.id
     const data= await users.findAll({
        where:{
            id:userid
        }

     })   
     if(data.length ==0){
        res,status(403).json({
            message:"no user present with that userid,invalid"
        })
     }else{
      if(data[0].role =="admin"){
       next()
      }else{
        res.status(403).json({
            message:"u dont have permission to perform this action"
        })
      }
     }
     next()
}
}
////


 async function userauthenticationmiddleware(req,res,next){
//check if user is authenticated(loggedin) or not

const token = req.headers.token
if(!token){
    res.status(403).json({
        message:"please provide token"
    })
}
else{
    //verify the token is exactly correct                                                                                                                                                           
    const result= jwt.verify(token,"hahahehhuh")
     const userid = result.id
     const data= await users.findAll({
        where:{
            id:userid
        }

     })   
     if(data.length ==0){
        res,status(403).json({
            message:"no user present with that userid,invalid"
        })
     }else{
      if(data[0].role =="user"){
       next()
      }else{
        res.status(403).json({
            message:"u dont have permission to perform this action"
        })
      }
     }
     next()
}
}



 async function adminauthenticationmiddleware(req,res,next){
//check if user is authenticated(loggedin) or not

const token = req.headers.token
if(!token){
    res.status(403).json({
        message:"please provide token"
    })
}
else{
    //verify the token is exactly correct                                                                                                                                                           
    const result= jwt.verify(token,"hahahehhuh")
     const userid = result.id
     const data= await users.findAll({
        where:{
            id:userid
        }

     })   
     if(data.length ==0){
        res,status(403).json({
            message:"no user present with that userid,invalid"
        })
     }else{
      if(data[0].role =="admin"){
       next()
      }else{
        res.status(403).json({
            message:"u dont have permission to perform this action"
        })
      }
     }
     next()
}
}


//login 
 async function loginauthenticationmiddleware(req,res,next){
//check if user is authenticated(loggedin) or not

const token = req.headers.token
if(!token){
    res.status(403).json({
        message:"please provide token"
    })
}
else{
    //verify the token is exactly correct                                                                                                                                                           
    const result= jwt.verify(token,"hahahehhuh")
     const userid = result.id
     const data= await users.findAll({
        where:{
            id:userid
        }

     })   
     if(data.length ==0){
        res,status(403).json({
            message:"no user present with that userid,invalid"
        })
     }else{
      
       next()
     }
}
}




module.exports = {adminauthenticationmiddleware,userauthenticationmiddleware,loginauthenticationmiddleware}