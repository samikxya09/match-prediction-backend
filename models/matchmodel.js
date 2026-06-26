function match(sequelize,datatypes){
    const match = sequelize.define("match",{
         TeamA:{
            type: datatypes.STRING
        },
         TeamB:{
            type: datatypes.STRING
        },
        })
        return match
}
module.exports = match