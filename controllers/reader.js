'use strict';

const models = require('../models');

module.exports = {
	showAll(req, res) {
		return models.Reader
			.findAll()
      		  .then(readers => res.status(201).render(`./pages/readers/list_reader.ejs`, { status: req.query.status, message: req.query.message, data: readers }))
      		  // .then(readers => res.status(201).send(readers))
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
    		  .then(item => res.status(201).redirect(`/items/add?status=1&message=Data ${item.brand} ${item.name} berhasil ditambahkan`))
    		  .catch(error => res.status(400).redirect(`/items/add?status=0&message=${error.message}`));
    },
};