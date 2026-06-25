function team(sequelize,datatypes){
    const team = sequelize.define("team",{
        teamname:{
            type: datatypes.STRING
        },
          teamcaptain:{
            type: datatypes.STRING
        },
          teamcoach:{
            type: datatypes.STRING
        },
        
    })
    return team
}
 module.exports = team
