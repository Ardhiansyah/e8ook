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
   return queryInterface.bulkInsert('Readers', [{
      name: 'Kim Jong Un',
      address: 'Korea Utara',
      email: 'kimjongun@koreautara.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Luffy',
      address: 'Big Mom Manssion',
      email: 'luffy@bajaklauttopijerami.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Nuryem',
      address: 'Neraya pondok kuning',
      email: 'nuryem@des.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Tsubasa',
      address: 'Jepang',
      email: 'tsubasa@jepang.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Readers', null, {});
  }
};
