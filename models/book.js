'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    author: DataTypes.STRING,
    total_page: DataTypes.INTEGER,
    quantity_all: DataTypes.INTEGER,
    quantity_current: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty(value) {
          if (value < 0) throw new Error('Stock buku habis!')
        }
      }
    },
    quantity_borrowed: DataTypes.INTEGER,
    contributor: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.quantity_current = instance.quantity_all
      },

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

  Book.findListBorrow = function(idBook, idUser) {
    return new Promise((resolve, reject) => {
      Book.findById(idBook)
      .then(book => {
        Book.findById(idBook, {
          include: {
            model: sequelize.models.Borrow,
            include: sequelize.models.Reader,
            where: {
              statusBorrowed: true
            },
            order: [['return_date', 'asc']]
          }
        })
        .then(borrow => resolve({book: book, borrow: borrow}))
      })
      .catch(err => reject(err));
    })
  }

  Book.prototype.readingDays = function() {
    return Math.ceil(this.total_page/100);
  };

  return Book;
};