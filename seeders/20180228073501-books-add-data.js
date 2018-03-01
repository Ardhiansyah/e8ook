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
   return queryInterface.bulkInsert('Books', [{
      title: "Jatuh Bangun Seorang Fullstack",
      sinopsis: "Heru adalah seorang yang sedang berjuang untuk masuk ke dunia programing. Dalam setiap perlajarannya dia selalu menerima tantangan yang tiada henti. Mampukah heru menyelesaikan tugasnya untuk menjadi developer",
      author: "Kang Udin",
      total_page: "89",
      quantity_all: "3",
      quantity_current: "3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: "Orang Dibalik Apple",
      sinopsis: "Apple adalah sebuah brand yang sangat besar dan terkenal di bumi ini. Siapakah orang yang berhasil membuat apple menjadi sebesar sekarang? apakah dia melakukan pesugihan? simak dalam buku ini",
      author: "Mas Bejo",
      total_page: "327",
      quantity_all: "2",
      quantity_current: "2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: "Awal Peradaban Callback",
      sinopsis: "Sebelum ada callback, dunia programer dimanja dengan adanya syncronous, namun semua berubah ketika calbback menyerang, mampukah semua developer bertahan dengan konsep callback?",
      author: "Bang Togar",
      total_page: "127",
      quantity_all: "2",
      quantity_current: "2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: "Ketika java bertemu script",
      sinopsis: "Dulu, java hidup dengan nyaman sendiri, dia menjadi bahasa yang dikagumi seluruh dunia. Namun suatu ketika script datang menghampiri. Java pun akhirnya tergoda untuk meminang script. dan mereka akhirnya hidup berbahagia dengan segala rintangan menghadang",
      author: "Kang Ayem",
      total_page: "235",
      quantity_all: "2",
      quantity_current: "2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: "Misteri promise yang selalu pending",
      sinopsis: "Di sebuah bootcamp, ada misteri promise yang belum pernah terlaksana. Semua orang menanti apakah promise itu ada atau error? dalam pencarian jawabannya, teka tekipun silih berdatangan.",
      author: "Mba Unah",
      total_page: "179",
      quantity_all: "3",
      quantity_current: "3",
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
    return queryInterface.bulkDelete('Books', null, {});
  }
};
