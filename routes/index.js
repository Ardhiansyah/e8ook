'use strict';

module.exports = app => {
<<<<<<< HEAD

	app.use('/', require('./dashboard'));
=======
	app.get('/', (req, res) => res.status(200).render('./pages/index.ejs', {
		message: 'E-8ook Library',
	}));

>>>>>>> 1e6ba60505f3a2ed04b919436ba0b4d73b22295e
	app.use('/readers', require('./reader'));
};