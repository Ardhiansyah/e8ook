'use strict';

const dashboardController = require('../controllers').dashboard;
const middleware = require('../helpers').sessionChecker;
const router = require('express').Router();

router.get('/', dashboardController.showDashboard);
router.get('/login', dashboardController.showLogin);
router.post('/login', dashboardController.login);
router.get('/signup', dashboardController.signup);
router.post('/signup', dashboardController.addUser);
router.get('/logout', dashboardController.logout);

module.exports = router;