const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    birthday: DataTypes.DATE
}, {
    sequelize,
    modelName: "user"
});

module.exports = User;