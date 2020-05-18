'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('users', { 
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Anton"
      },

      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('users');
  }
};
