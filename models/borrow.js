'use strict';
module.exports = (sequelize, DataTypes) => {
  var Borrow = sequelize.define('Borrow', {
    IdBook: DataTypes.INTEGER,
    IdReader: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {});
  Borrow.associate = function(models) {
    Borrow.belongsTo(models.Reader);
    Borrow.belongsTo(models.Book);
  };
  return Borrow;
};