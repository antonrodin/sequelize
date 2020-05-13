'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    tableName: "users"
  });

  User.associate = function(models) {
    // Usuario tiene un domicilio o una direccion
    User.hasOne(models.Address, { as: "domicilio", foreignKey: "user_id" });
  };

  return User;
};