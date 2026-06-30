const jwt = require("jsonwebtoken")

function authenticationmiddleware(req,res,next){
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
     console.log(result)
    next()
}
}


module.exports = authenticationmiddleware