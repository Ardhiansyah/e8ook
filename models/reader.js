'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reader = sequelize.define('Reader', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Reader.associate = function(models) {
    Reader.hasMany(models.Borrow);
    Reader.belongsToMany(models.Book, { through: models.Borrow });
  };
  return Reader;
};