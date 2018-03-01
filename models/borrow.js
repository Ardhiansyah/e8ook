'use strict';
module.exports = (sequelize, DataTypes) => {
  var Borrow = sequelize.define('Borrow', {
    BookId: DataTypes.INTEGER,
    ReaderId: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {});
  Borrow.associate = function(models) {
    Borrow.belongsTo(models.Reader);
    Borrow.belongsTo(models.Book);
  };
  return Borrow;
};