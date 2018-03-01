'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    author: DataTypes.STRING,
    total_page: DataTypes.INTEGER,
    quantity_all: DataTypes.INTEGER,
    quantity_current: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    Book.hasMany(models.Borrow);
    Book.belongsToMany(models.Reader, { through: models.Borrow });
  };
  Book.prototype.readingDays = function() {
    return Math.ceil(this.total_page/100);
  };
  return Book;
};