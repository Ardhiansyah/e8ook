'use strict';
module.exports = (sequelize, DataTypes) => {
  var Borrow = sequelize.define('Borrow', {
    BookId: DataTypes.INTEGER,
    ReaderId: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        sequelize.models.Book.findById(instance.BookId)
        .then(book => {
          sequelize.models.Book.update({
            quantity_current: (book.quantity_current - 1),
            quantity_borrowed: (book.quantity_borrowed + 1)
          }, {
            where: {
              id: instance.BookId
            }
          })
        })
      },
    }
  });
  Borrow.associate = function(models) {
    Borrow.belongsTo(models.Reader);
    Borrow.belongsTo(models.Book);
  };
  return Borrow;
};