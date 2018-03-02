'use strict';

const models = require('../models');
const helpers = require('../helpers');

module.exports = {
	showAll(req, res) {
		return models.Book
			.findAll()
      		  .then(books => res.status(201).render(`./pages/books/list_book.ejs`, { status: req.query.status, message: req.query.message, data: books, session: req.session }))
      		//   .then(books => res.status(201).send(books))
       		  .catch(error => res.status(400).send(error));
	},

	showAddbookForm(req ,res) {
		res.status(201).render(`./pages/books/add_book.ejs`, { status: req.query.status, message: req.query.message, session: req.session });
    },

    addData(req, res) {
    	return models.Book
    		.create({
    			title: req.body.title,
    			sinopsis: req.body.sinopsis,
                author: req.body.author,
				total_page: req.body.total_page,
				quantity_all: req.body.quantity_all,
				contributor: req.body.contributor,
    		})
    		  .then(book => res.status(201).redirect(`/books/add?status=1&message=Data ${book.title} ${book.author} berhasil ditambahkan`))
    		  .catch(error => res.status(400).redirect(`/books/add?status=0&message=${error.message}`));
	},
	
	showEditData(req, res) {
		return models.Book
			.findById(req.params.id)
			.then(data => res.status(201).render(`./pages/books/edit_book.ejs`, { status: req.query.status, message: req.query.message , data: data, session: req.session}))	
			.catch(error => res.status(400).redirect(`/books?status=0&message=${error.message}`));
	},

	editData(req, res) {
		return models.Book
			.findById(req.params.id)
			.then(data => {
				data.update({
					title: req.body.title,
					sinopsis: req.body.sinopsis,
					author: req.body.author,
					total_page: req.body.total_page,
					quantity_all: req.body.quantity_all,
				})
				  .then(book => res.status(201).redirect(`/books/${req.params.id}/edit?status=1&message=Data ${book.title} ${book.author} berhasil diupdate`))
				  .catch(error => res.status(400).redirect(`/books/${req.params.id}/edit?status=0&message=${error.message}`));
			})
	},

	showBorrowForm(req, res) {
		return models.Book.findListBorrow(req.params.id, req.session.idUser)
			.then(listBorrow => {
				console.log(listBorrow.borrow)
				let bookInfo = '';
				if (listBorrow.book.quantity_current <= 0) bookInfo = `Stock buku habis, silahkan tunggu ditanggal ${helpers.formatDate(listBorrow.borrow.Borrows[0].return_date)}`;
				else bookInfo = `Stock buku tersisa ${listBorrow.book.quantity_current}`;

				res.status(201).render(`./pages/books/borrow_book.ejs`, { status: req.query.status, message: req.query.message , book: listBorrow.book, borrow: listBorrow.borrow, session: req.session, bookInfo: bookInfo})
			})
			.catch(error => res.status(400).redirect(`/?status=0&message=${error.message}`));
	},

	borrowBook(req, res) {
		return models.Borrow.create({
				BookId: req.params.id,
    			ReaderId: req.session.idUser,
                start_date: req.body.start_date,
                return_date: req.body.return_date,
                statusBorrowed: true,
    		})
			.then(() => {
				models.Book.findById(req.params.id)
				.then(book => {
					helpers.sendEmail(req.session.email, { title: book.title, return_date: req.body.return_date })
					res.status(201).redirect(`/books/${req.params.id}/borrow?status=1&message=Buku Berhasil Dipinjam`)
				})
			})
			.catch(error => res.status(400).redirect(`/books/${req.params.id}/borrow?status=0&message=${error.message}`));
	},

	deleteData(req, res) {
		return models.Book.findById(req.params.id)
		.then(book => {
			book.destroy()
			.then(item => res.status(201).redirect(`/books`))
			.catch(error => res.status(400).redirect(`/books?status=0&message=${error.message}`));
		});
	}

};