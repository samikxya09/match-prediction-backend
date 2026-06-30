const { match } = require("../database/connection")

//creating data

async function registermatch(req,res){
    const teamA = req.body.teamA
    const teamB =req.body.teamB


    await match.create({
        TeamA: teamA,
        TeamB:teamB,
    })
      console.log("Data inserted!");
    res.status(200).json({
        message:"match is called"

    })
}

//fetching data
async function fetchmatches(req,res){
    const data =await match.findAll();
     res.json({
        message:"alll matches",
        data:data
     });
}

//delete
async function deletematches(req,res){
    const id = req.paramas.id
    await match.destroy({
        where: {
            id:id
        }
    })
   res.status(200).json({
    message:"deleted sucessfully."
   })
}





module.exports = {registermatch,fetchmatches,deletematches}