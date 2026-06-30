const sequelize = require("sequelize")


const connection = new sequelize.Sequelize("postgresql://postgres.rhacgsulhropjdqinqoz:@9811061471@@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true")


connection.authenticate()
.then(function()
{
    console.log("connected suceesfully")
})
.catch(function()
{
    console.log("error occured")
})
const match =require("./../models/matchmodel")(connection,sequelize.DataTypes)
const teams =require("./../models/teammodel") (connection,sequelize.DataTypes)
const users = require("./../models/usersmodel")(connection,sequelize.DataTypes)
const blogs = require("./../models/blogsmodel")(connection,sequelize.DataTypes)
const products = require("./../models/productsmodels")(connection,sequelize.DataTypes)
connection.sync({alter:false}).then(function(){
    console.log("migrate succesfully")
})

module.exports= {connection,users,teams,match}