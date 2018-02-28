'use strict';

const models = require('../models');

module.exports = {
	showAll(req, res) {
		return models.Reader
			.findAll()
      		  .then(readers => res.status(201).render(`./pages/readers/list_reader.ejs`, { status: req.query.status, message: req.query.message, readers: readers }))
       		  .catch(error => res.status(400).send(error));
	},

	showAddReaderForm(req ,res) {
    	res.status(201).render(`./pages/readers/add_reader.ejs`, { status: req.query.status, message: req.query.message });
    },

    addReader(req, res) {
    	return models.Reader.create({
                name: req.body.name,
    			address: req.body.address,
    			email: req.body.email,
                phone: req.body.phone,
    		})
            .then(reader => res.status(201).redirect(`/readers/add?status=1&message=Data ${reader.name} berhasil ditambahkan`))
    		.catch(error => res.status(400).redirect(`/readers/add?status=0&message=${error.message}`));
    },

    showEditReaderForm(req ,res) {
        return models.Reader.findById(req.params.id)
            .then(reader => res.status(201).render(`./pages/readers/edit_reader.ejs`, { status: req.query.status, message: req.query.message, reader: reader }))
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
    },
};