function users(sequelize,datatypes){
  const users = sequelize.define("users",{
    name:{
        type: datatypes.STRING
    },
    email:{
        type: datatypes.STRING
    },
    password:{
        type: datatypes.STRING
    }
    
 })
 return users
}
module.exports =users



