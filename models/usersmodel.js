const { DataTypes } = require("sequelize")

function users(sequelize,datatypes){
  const users = sequelize.define("users",{
    name:{
        type: datatypes.STRING,
        allowNUll: false
    },
    email:{
        type: datatypes.STRING,
        allowNUll : false
    },
    password:{
        type: datatypes.STRING
    },
    role: {
        type: datatypes.ENUM("admin","user"),
        defaultvalue: "user",
        allowNUll:false
    }
    
 })
 return users
}
module.exports =users



