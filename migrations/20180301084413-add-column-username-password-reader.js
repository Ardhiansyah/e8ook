'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Readers', 'username', Sequelize.STRING),
      queryInterface.addColumn('Readers', 'password', Sequelize.STRING),
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Readers', 'username'),
      queryInterface.removeColumn('Readers', 'password'),
    ]
  }
};
