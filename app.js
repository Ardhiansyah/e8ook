'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');
const routes = require('./routes');
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

<<<<<<< HEAD
app.locals.helpers = require('./helpers');

=======
>>>>>>> 1e6ba60505f3a2ed04b919436ba0b4d73b22295e
app.use(express.static('public'));

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: false,
    cookie: {
    	isLogin: false,
    	idUser: null,
    	userName: null
    }
}));

routes(app);

app.listen(port, () => console.log(`Server listening on port ${port}…`));