const { match } = require("../database/connection")



async function registermatch(req,res){
    const teamA = req.body.teamA
    const teamB =req.body.teamB


    await match.create({
        TeamA: teamA,
        TeamB:teamB,
    })
    res.status(200).json({
        message:"match is called"

    })
}

module.exports = registermatch