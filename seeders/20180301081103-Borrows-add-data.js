'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Borrows', [{
      IdBook: 2,
      IdReader: 3,
      start_date: new Date(),
      return_date: new Date,
      createdAt: new Date(),
      updatedAt: new Date(), 
    },{
      IdBook: 3,
      IdReader: 3,
      start_date: new Date(),
      return_date: new Date,
      createdAt: new Date(),
      updatedAt: new Date(), 
    },{
      IdBook: 4,
      IdReader: 3,
      start_date: new Date(),
      return_date: new Date,
      createdAt: new Date(),
      updatedAt: new Date(), 
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Borrows', null, {});
  }
};
