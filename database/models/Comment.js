
module.exports = (sequelize, dataTypes) => {
   
    let alias= "Comment";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        productId: {
            type:dataTypes.INTEGER
        },
        userId: {
            type:dataTypes.INTEGER
    
        },
        textComment: {
            type: dataTypes.INTEGER,
        
        },
        createdAt : {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt : {
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt :{
            type: dataTypes.DATE,
            allowNull: true
        }
    
    }
    let config = {
        tableName: "comments",
        timestamps: true
    }
const  Comment = sequelize.define(alias, cols, config)    

/*
Comment.associate = function (models){
    Comment.belongsTo(models.Product,{
        foreignKey: 'productId',
        as: 'product'
    } );
    Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
    })
}*/


    return Comment;
}