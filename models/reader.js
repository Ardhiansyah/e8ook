'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reader = sequelize.define('Reader', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isUnique(value, next) {
          if (value) {
            Reader.findAll({
              where: { email: value }
            }).then(result => {

              if (result.length >= 1) next('Only unique email are allowed!');
              else next();
            })
          } else {
            next('Email can not be empty');
          }
        }
      }
    },
    phone: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique(value, next) {
          if (value) {
            Reader.findAll({
              where: { username: value }
            }).then(result => {

              if (result.length >= 1) next('Only unique username are allowed!');
              else next();
            })
          } else {
            next('Username can not be empty');
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 12],
          msg: 'Only allow password with length between 6 and 12'
        },
      }
    },
  }, {});
  Reader.associate = function(models) {
    Reader.hasMany(models.Borrow);
    Reader.belongsToMany(models.Book, { through: models.Borrow });
  };
  return Reader;
};