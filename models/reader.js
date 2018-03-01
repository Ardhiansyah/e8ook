'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reader = sequelize.define('Reader', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Reader.associate = function(models) {
    // associations can be defined here
  };
  return Reader;
};