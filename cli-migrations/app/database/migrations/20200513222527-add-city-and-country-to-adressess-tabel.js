module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        // Para crear el campo city
        queryInterface.addColumn('addresses', 'city', {
          type: Sequelize.STRING,
          defaultValue: "Madrid"
        }, { transaction: t }),

        // Para crear el campo country
        queryInterface.addColumn('addresses', 'country', {
          type: Sequelize.STRING,
          defaultValue: "Spain"
        }, { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.removeColumn('addresses', 'city', { transaction: t }),

        queryInterface.removeColumn('addresses', 'country', { transaction: t })
      ])
    })
  }
};