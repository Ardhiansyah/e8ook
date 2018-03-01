'use strict';

const models = require('../models');

module.exports = {
	returnBook(req, res) {
        // res.send('on developed')
        return models.Borrow
        .findAll({
            attributes: ['id', 'start_date','return_date', 'statusBorrowed'], 
            include: [{model: models.Book}],
            where: {ReaderId: req.session.idUser,
            statusBorrowed: true},
            
        })
        // .then(data => res.send(data))
        .then(data => res.status(201).render(`./pages/returnBook/returnBook.ejs`, { status: req.query.status, message: req.query.message, data: data, session: req.session }))
        .catch(error => res.status(400).send(error));
    },
    
    statusReturn(req, res) {
		// return models.Borrow.findById(req.params.id)
		// .then(status => {
            // res.send(status)
			// status.update({
            //     statusBorrowed: false
            // })
			// .then(item => res.status(201).redirect(`/returnBook`))
			// .catch(error => res.status(400).redirect(`/books?status=0&message=${error.message}`));
        // });
        return models.Borrow.update({
            statusBorrowed: false
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(201).redirect('/returnBook'))
        .catch(error => res.status(400).send(error));
	}

};