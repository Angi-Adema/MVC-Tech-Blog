//Import Sequelize and connection.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//Create a new Sequelize medel for comments.
class Users extends Model { }
//Create table.
Users.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 20]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 30]
        }
    }
},
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                if (updatedUserData.password) {
                    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                }
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    });
    //Export the file.
    module.exports = Users;