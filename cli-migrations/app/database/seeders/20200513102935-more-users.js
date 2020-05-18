'use strict';

const faker = require('faker');

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let users = [
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  // Esto se ejecuta cuando se dehace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', {
      age: 18
    }, {});
  }
};
