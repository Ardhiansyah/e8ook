'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    author: DataTypes.STRING,
    total_page: DataTypes.INTEGER,
    quantity_all: DataTypes.INTEGER,
    quantity_current: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.quantity_current = instance.quantity_all
      },

      // afterUpdate: (instance, options) => {
      //   sequelize.models.Book.findById(instance.id)
      //   .then(book => {
      //     console.log(book.quantity_current)
      //     console.log(book.quantity_all)
      //     console.log(instance.quantity_current)
      //     console.log(instance.quantity_all)
      //     if(book.quantity_all != instance.quantity_all) {
      //       let updateCurrent = book.quantity_current - (book.quantity_alls-instance.quantity_all)
      //       book.update({
      //         quantity_current: updateCurrent
      //       })
      //       .then(book => {
      //         console.log(book);
      //       })
      //     } 
      //   })
      //   // console.log(sequelize.models.Book)
      // }

    }
  });
  Book.associate = function(models) {
    Book.hasMany(models.Borrow);
    Book.belongsToMany(models.Reader, { through: models.Borrow });
  };
  Book.prototype.readingDays = function() {
    return Math.ceil(this.total_page/100);
  };
  return Book;
};