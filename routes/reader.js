'use strict';

const readerController = require('../controllers').reader;
const router = require('express').Router();

router.get('/', readerController.showAll);
router.get('/add', readerController.showAddReaderForm);
// router.post('/add', readerController.addReader);
// router.get('/add', readerController.showAddReaderForm);

module.exports = router;