'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING
  }, {
    tableName: "addresses"
  });

  Address.associate = function(models) {
    Address.belongsTo(models.User, { as: "residente", foreignKey: "user_id" })
  };

  return Address;
};