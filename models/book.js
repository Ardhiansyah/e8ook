'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    author: DataTypes.STRING,
    total_page: DataTypes.INTEGER,
    quantity_all: DataTypes.INTEGER,
    quantity_current: DataTypes.INTEGER,
    quantity_borrowed: DataTypes.INTEGER,
    contributor: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.quantity_current = instance.quantity_all
      },

      // afterUpdate: (instance, options) => {
      //   instance.
      // }

      afterUpdate: (instance, options) => {
        sequelize.models.Book.update({
          quantity_current: (instance.quantity_all - instance.quantity_borrowed)
        }, {
          where: {id: instance.id}
        })
      }

    }
  });
  Book.associate = function(models) {
    Book.hasMany(models.Borrow);
    Book.belongsToMany(models.Reader, { through: models.Borrow });
  };
  Book.prototype.readingDays = function() {
    return Math.ceil(this.total_page/100);
  };

  // Book.prototype.stockCurrent = function() {
  //   return Math.ceil(this.quantity_all - this.quantity_borrowed);
  // };

  return Book;
};