module.exports = (sequelize, dataTypes) => {
   
    let alias= "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type:dataTypes.INTEGER,
        },
        nameProduct: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type:dataTypes.STRING,
            allowNull: false
        },
        photoProduct: {
            type:dataTypes.STRING,
            allowNull: false
        },
        createdAt : {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt :{
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt :{
            type: dataTypes.DATE,
            allowNull: true
        },
    
    }
    let config = {
        tableName: "products",
        timestamps: true
    }
    const Product = sequelize.define(alias, cols, config)    


/*Product.associate = function (models) {
    Product.belongsTo (models.User,{
        foreignKey: 'userId',
        as: 'user'
    } );
    
    Product.hasMany (models.Comment,{
        foreignKey: 'productId',
        as: 'comments'
    } );
}*/
    return Product;
}