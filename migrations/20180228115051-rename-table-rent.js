'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('Rents', 'Borrows');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('Borrows', 'Rents');
  }
};
