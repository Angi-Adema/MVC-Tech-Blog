//Import Sequelize and connection.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//Create a new Sequelize medel for comments.
class Post extends Model {}
//Create table.
Post.init({
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    // users_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'users',
    //         key: 'id'
    //     }
    // }
},
    {
        sequelize,
        // timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);
//Export the file.
module.exports = Post;

