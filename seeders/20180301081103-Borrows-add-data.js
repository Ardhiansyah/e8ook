'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Borrows', [{
      IdBook: 6,
      IdReader: 5,
      start_date: new Date(),
      return_date: new Date,
      createdAt: new Date(),
      updatedAt: new Date(), 
    },{
      IdBook: 7,
      IdReader: 5,
      start_date: new Date(),
      return_date: new Date,
      createdAt: new Date(),
      updatedAt: new Date(), 
    },{
      IdBook: 8,
      IdReader: 5,
      start_date: new Date(),
      return_date: new Date,
      createdAt: new Date(),
      updatedAt: new Date(), 
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Borrows', null, {});
  }
};
