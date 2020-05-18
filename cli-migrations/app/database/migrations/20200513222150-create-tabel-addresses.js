'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('addresses', { 
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      street: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Anton"
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }

    });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('addresses');
  }
};
