'use strict';

const historyController = require('../controllers').history;
const router = require('express').Router();
const middlewere = require('../helpers').sessionChecker;

router.get('/', middlewere, historyController.showAll);

module.exports = router;