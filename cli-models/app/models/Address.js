'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING
  }, {
    tableName: "addresses"
  });

  Address.associate = function(models) {
    // associations can be defined here
  };

  return Address;
};