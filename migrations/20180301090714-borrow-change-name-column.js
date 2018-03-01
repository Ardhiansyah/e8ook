'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.renameColumn('Borrows', 'IdBook', 'BookId'),
      queryInterface.renameColumn('Borrows', 'IdReader', 'ReaderId'),
    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return [
    queryInterface.renameColumn('Borrows', 'BookId', 'IdBook'),
    queryInterface.renameColumn('Borrows', 'ReaderId', 'ReaderId'),
   ]
  }
};
