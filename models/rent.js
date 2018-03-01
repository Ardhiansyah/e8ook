'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rent = sequelize.define('Rent', {
    IdBook: DataTypes.INTEGER,
    IdReader: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {});
  Rent.associate = function(models) {
    // associations can be defined here
  };
  return Rent;
};