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
//for get request
async function fetchteams(req,res){
   const data = await teams.findAll()
   res.status(200).json({
      message: "team fetched sucessfully",
      data : data
   })
}

// for delete

async function deleteteams(req,res){
   const id = req.params.id
   await teams.destroy({
      where:{
         id : id
      }
   })
   res.status(200).json({
      message:"team deleted succesfully"
   })
}
module.exports={ Registerteam ,fetchteams,deleteteams }