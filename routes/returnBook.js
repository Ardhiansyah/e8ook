'use strict';

const returnBookController = require('../controllers').returnBook;
const router = require('express').Router();
const middlewere = require('../helpers').sessionChecker;

router.get('/', middlewere, returnBookController.returnBook);
router.get('/:id/returnBook', middlewere, returnBookController.statusReturn);

module.exports = router;