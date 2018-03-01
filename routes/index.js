'use strict';

module.exports = app => {

	app.use('/', require('./dashboard'));
	app.use('/readers', require('./reader'));
	app.use('/books', require('./book'));
};