const { teams } = require("../database/connection")

 async function Registerteam(req,res){
    const teamname = req.body.name
    const teamcaptain= req.body.captain
    const teamcoach = req.body.coach

 await teams.create({
    teamname: teamname,
    teamcaptain:teamcaptain,
    teamcoach:teamcoach,
 })
  res.status(200).json({
   message: "team is called"
  })

}
module.exports= Registerteam