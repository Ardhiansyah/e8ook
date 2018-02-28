'use strict';

const bookController = require('../controllers').book;
const router = require('express').Router();

router.get('/', bookController.showAll);
router.get('/add', bookController.showAddbookForm);
router.post('/add', bookController.addData);
router.get('/:id/edit', bookController.showEditData);
router.post('/:id/edit', bookController.editData);
// router.post('/:id/edit', (req,res) => res.send(req.body));

module.exports = router;