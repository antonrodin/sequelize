'use strict';

const { User } = require('../../models/index');
const faker = require('faker');

module.exports = {
  
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      User.create({
        name: faker.name.findName(),
        age: 32,
        domicilio: {
          street: faker.address.streetName()
        }
      }, {
        include: "domicilio"
      }),
      User.create({
        name: faker.name.findName(),
        age: 32,
        domicilio: {
          street: faker.address.streetName()
        }
      }, {
        include: "domicilio"
      }),
      User.create({
        name: faker.name.findName(),
        age: 32,
        domicilio: {
          street: faker.address.streetName()
        }
      }, {
        include: "domicilio"
      }),
    ]);

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', {
      age: 32
    }, {});
  }

};
