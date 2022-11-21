//Import Sequelize and connection.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//Create a new Sequelize medel for comments.
class Comment extends Model {}
//Create table.
Comment.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    comment_body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    // users_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'users',
    //         key: 'id'
    //     }
    // },
    // posts_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'posts',
    //         key: 'id'
    //     }
    // }
},
    {
        sequelize,
        // timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);
//Export the file.
module.exports = Comment;