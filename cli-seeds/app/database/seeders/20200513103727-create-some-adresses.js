'use strict';

const faker = require('faker');
const { User } = require('../../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let addresses = [];

    // Obtenemos los usuarios
    let users = await User.findAll();

    // Recorremos los usuarios y añadimos una direccion para cada unos
    users.forEach(user => {
      addresses.push({
        street: faker.address.streetName(),
        user_id: user.id
      });
    });

    return queryInterface.bulkInsert('addresses', addresses, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('addresses', null, {});
  }
};
