'use strict';

module.exports = app => {
	app.get('/', (req, res) => res.status(200).render('./pages/index.ejs', {
		message: 'E-8ook Library',
	}));

	app.use('/readers', require('./reader'));
	app.use('/books', require('./book'));
};