'use strict';

const dashboardController = require('../controllers').dashboard;
const router = require('express').Router();

router.get('/', (req, res) => res.status(200).render('./pages/index.ejs', {
		message: 'E-8ook Library',
	}));

module.exports = router;