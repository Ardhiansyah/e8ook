'use strict';

const bookController = require('../controllers').book;
const middleware = require('../helpers').sessionChecker;
const router = require('express').Router();

router.use('/', middleware);

router.get('/', bookController.showAll);
router.get('/add', bookController.showAddbookForm);
router.post('/add', bookController.addData);
router.get('/:id/edit', bookController.showEditData);
router.post('/:id/edit', bookController.editData);
router.get('/:id/borrow', bookController.showBorrowForm);
router.post('/:id/borrow', bookController.borrowBook);

module.exports = router;