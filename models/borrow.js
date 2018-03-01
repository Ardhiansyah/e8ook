'use strict';
module.exports = (sequelize, DataTypes) => {
  var Borrow = sequelize.define('Borrow', {
    BookId: DataTypes.INTEGER,
    ReaderId: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {
    // hooks: {
    //   beforeCreate: (instance, options) => {
    //     sequelize.models.Book.findById(instance.BookId)
    //     .then(book => {
    //       book.update({
            
    //       })
    //     })
    //     instance.quantity_current = instance.quantity_all
    //   },
    // }
  });
  Borrow.associate = function(models) {
    Borrow.belongsTo(models.Reader);
    Borrow.belongsTo(models.Book);
  };
  return Borrow;
};