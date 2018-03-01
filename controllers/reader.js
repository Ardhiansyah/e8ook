'use strict';

const models = require('../models');

module.exports = {
	showAll(req, res) {
		return models.Reader
			.findAll()
<<<<<<< HEAD
      		  .then(readers => res.status(201).render(`./pages/readers/list_reader.ejs`, { status: req.query.status, message: req.query.message, readers: readers, session: req.session }))
=======
      		  .then(readers => res.status(201).render(`./pages/readers/list_reader.ejs`, { status: req.query.status, message: req.query.message, data: readers }))
      		  // .then(readers => res.status(201).send(readers))
>>>>>>> 1e6ba60505f3a2ed04b919436ba0b4d73b22295e
       		  .catch(error => res.status(400).send(error));
	},

	showAddReaderForm(req ,res) {
    	res.status(201).render(`./pages/readers/add_reader.ejs`, { status: req.query.status, message: req.query.message });
    },

    addData(req, res) {
    	return models.Item
    		.create({
    			name: req.body.name,
    			brand: req.body.brand,
    			codeitem: req.body.codeitem,
    		})
<<<<<<< HEAD
            .then(reader => res.status(201).redirect(`/readers/add?status=1&message=Data ${reader.name} berhasil ditambahkan`))
    		.catch(error => res.status(400).redirect(`/readers/add?status=0&message=${error.message}`));
    },

    showEditReaderForm(req ,res) {
        return models.Reader.findById(req.params.id)
            .then(reader => res.status(201).render(`./pages/readers/edit_reader.ejs`, { status: req.query.status, message: req.query.message, reader: reader, session: req.session }))
            .catch(error => res.status(400).send(error));
    },

    editReader(req, res) {
        return models.Reader.findById(req.params.id)
            .then(reader => {
                reader.update({
                    name: req.body.name,
                    address: req.body.address,
                    email: req.body.email,
                    phone: req.body.phone,
                })
                .then(reader => res.status(201).redirect(`/readers/${req.params.id}/edit?status=1&message=Data ${req.body.name} berhasil diubah`))
                .catch(error => res.status(400).redirect(`/readers/${req.params.id}/edit?status=0&message=${error.message}`));
            })
    },

    deleteReader(req, res) {
        return models.Reader.findById(req.params.id)
            .then(reader => {
                reader.destroy()
                .then(item => res.status(201).redirect(`/readers`))
                .catch(error => res.status(400).redirect(`/readers?status=0&message=${error.message}`));
            });
=======
    		  .then(item => res.status(201).redirect(`/items/add?status=1&message=Data ${item.brand} ${item.name} berhasil ditambahkan`))
    		  .catch(error => res.status(400).redirect(`/items/add?status=0&message=${error.message}`));
>>>>>>> 1e6ba60505f3a2ed04b919436ba0b4d73b22295e
    },
};