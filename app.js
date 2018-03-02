'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');
const routes = require('./routes');
const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.locals.helpers = require('./helpers');

app.use(express.static('public'));

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: false,
    cookie: {
    	isLogin: false,
    	idUser: null,
    	userName: null,
    	email: null,
    }
}));

routes(app);

app.listen(port, () => console.log(`Server listening on port ${port}…`));