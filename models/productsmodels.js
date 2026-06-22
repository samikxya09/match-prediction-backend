function products(sequelize,datatypes){
    const products = sequelize.define("products",{
        name:{
            type:datatypes.STRING

        },
        price:{
            type:datatypes.INTEGER
        },
        quantity:{
            type:datatypes.INTEGER
        },

       

    })
    return products
}
module.exports =products