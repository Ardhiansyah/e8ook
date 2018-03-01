'use strict';

const historyController = require('../controllers').history;
const router = require('express').Router();

router.get('/', historyController.showAll);
// router.get('/add', historyController.showAddhistoryForm);
// router.post('/add', historyController.addData);
// router.get('/:id/edit', historyController.showEditData);
// router.post('/:id/edit', historyController.editData);
// router.get('/:id/delete', historyController.deleteData);

module.exports = router;