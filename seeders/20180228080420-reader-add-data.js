'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Readers', [{
      name: 'Kim Jong Un',
      address: 'Korea Utara',
      email: 'kimjongun@koreautara.com',
      phone: "1234567890",
      username: "kimjong",
      password: "kimjong",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Luffy',
      address: 'Big Mom Manssion',
      email: 'luffy@bajaklauttopijerami.com',
      phone: "1234567890",
      username: "luffy",
      password: "luffy",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Nuryem',
      address: 'Neraya pondok kuning',
      email: 'nuryem@des.com',
      phone: "1234567890",
      username: "nuryem",
      password: "nuryem",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Tsubasa',
      address: 'Jepang',
      email: 'tsubasa@jepang.com',
      phone: "1234567890",
      username: "ozora",
      password: "ozora",
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Readers', null, {});
  }
};
