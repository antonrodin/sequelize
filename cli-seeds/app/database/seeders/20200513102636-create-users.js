'use strict';

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let users = [
      { name: "Anton", age: 17 },
      { name: "Lucia", age: 17 },
      { name: "Sergio", age: 17 },
      { name: "Pepe", age: 17 },
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  // Esto se ejecuta cuando se dehace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};
