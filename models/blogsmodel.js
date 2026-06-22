function blogs(sequelize,datatypes){
    const blogs = sequelize.define("blogs",{
        title:{
            type:datatypes.STRING
        },
        description:{
            type:datatypes.STRING
        },
        subtitle:{
            type:datatypes.STRING

        },
        
        })
        return blogs
}
module.exports =blogs