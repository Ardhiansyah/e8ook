'use strict';

const readerController = require('../controllers').reader;
const router = require('express').Router();

router.get('/', readerController.showAll);
router.get('/add', readerController.showAddReaderForm);
router.post('/add', readerController.addReader);
router.get('/:id/edit', readerController.showEditReaderForm);
router.post('/:id/edit', readerController.editReader);
router.get('/:id/delete', readerController.deleteReader);

module.exports = router;