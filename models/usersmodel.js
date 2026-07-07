const { DataTypes } = require("sequelize")

function users(sequelize,datatypes){
  const users = sequelize.define("users",{
    name: {
      type: datatypes.STRING,
      allowNull: false
    },
    email: {
      type: datatypes.STRING,
      allowNull: false
    },
    password: {
      type: datatypes.STRING
    },
    role: {
      type: datatypes.ENUM("admin", "user"),
      defaultValue: "user",
      allowNull: true
    }
    
 })
 return users
}
module.exports =users



