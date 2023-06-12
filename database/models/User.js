module.exports = (sequelize, dataTypes) => {
   
    let alias= "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        username: {
            type: dataTypes.STRING,
            allowNull:false
        },
        email: {
            type:dataTypes.STRING,
            allowNull:false
        },
        dateBirth:{
            type:dataTypes.DATE,
            allowNull:false
        },
        password:{
            type:dataTypes.STRING,
            allowNull:false
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull:false  
        },
        profilePhoto: {
            type: dataTypes.STRING,
            allowNull:true 
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
        tableName: "users",
        timestamps: true
    }
    const User = sequelize.define(alias, cols, config)    


  /*  User.associate = function (models){
    
        User.hasMany(models.Product, {
            foreignKey: 'userId',
            as: 'products'
        });
        User.hasMany(models.Comment, {
            foreignKey: 'userId',
            as: 'comments'
        });
    }
*/


    return User;
}