'use strict';

const models = require('../models');

module.exports = {
	showAll(req, res) {
		return models.Book
			.findAll()
      		  .then(books => res.status(201).render(`./pages/books/list_book.ejs`, { status: req.query.status, message: req.query.message, data: books }))
      		//   .then(books => res.status(201).send(books))
       		  .catch(error => res.status(400).send(error));
	},

	showAddbookForm(req ,res) {
		res.status(201).render(`./pages/books/add_book.ejs`, { status: req.query.status, message: req.query.message });
    },

    addData(req, res) {
    	return models.Book
    		.create({
    			title: req.body.title,
    			sinopsis: req.body.sinopsis,
                author: req.body.author,
				total_page: req.body.total_page,
				quantity_all: req.body.quantity_all,
    		})
    		  .then(book => res.status(201).redirect(`/books/add?status=1&message=Data ${book.title} ${book.author} berhasil ditambahkan`))
    		  .catch(error => res.status(400).redirect(`/books/add?status=0&message=${error.message}`));
	},
	
	showEditData(req, res) {
		return models.Book
			.findById(req.params.id)
			.then(data => res.status(201).render(`./pages/books/edit_book.ejs`, { status: req.query.status, message: req.query.message , data: data}))	
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

	deleteData(req, res) {
		return models.Book.findById(req.params.id)
		.then(book => {
			book.destroy()
			.then(item => res.status(201).redirect(`/books`))
			.catch(error => res.status(400).redirect(`/books?status=0&message=${error.message}`));
		});
	}
};