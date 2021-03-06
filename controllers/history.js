'use strict';

const models = require('../models');

module.exports = {
	showAll(req, res) {
        // res.send('on developed')
        return models.Borrow
        .findAll({
            where: {ReaderId: req.session.idUser,
                statusBorrowed: false},
            include: [{model: models.Book}]
        })
        // .then(data => res.send(data))
        .then(history => res.status(201).render(`./pages/history/list_history.ejs`, { status: req.query.status, message: req.query.message, data: history, session: req.session }))
        // .then(history => res.status(201).send(history))
        .catch(error => res.status(400).send(error));
	},

};