'use strict';

const models = require('../models');

module.exports = {
	showDashboard(req, res) {
		return models.Book.findAll()
		.then(books => res.status(201).render(`./pages/index.ejs`, { status: req.query.status, message: req.query.message, books: books, session: req.session }))
		.catch(error => res.status(400).send(error));
	},

	signup(req ,res) {
    	res.status(201).render(`./pages/readers/add_reader.ejs`, { status: req.query.status, message: req.query.message, session: req.session });
    },

    addUser(req, res) {
    	return models.Reader.create({
                name: req.body.name,
    			address: req.body.address,
    			email: req.body.email,
                phone: req.body.phone,
                username: req.body.username,
                password: req.body.password,
    		})
            .then(reader => res.status(201).redirect(`/signup?status=1&message=Data ${reader.name} berhasil ditambahkan`))
    		.catch(error => res.status(400).redirect(`/signup?status=0&message=${error.message}`));
    },

    showLogin(req ,res) {
        res.status(201).render(`./pages/login.ejs`, { status: req.query.status, message: req.query.message, session: req.session });
    },

    login(req, res) {
        return models.Reader.findAll({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
            .then(reader => {
                if (reader.length == 1) {
                    req.session.isLogin = true;
                    req.session.idUser = reader[0].id;
                    req.session.userName = reader[0].username;
                    res.status(201).redirect('/');
                } 
                else reject();
            })
            .catch(error => res.status(400).redirect('/login?status=0&message=Username / Password Salah'));
    },

    logout(req, res) {
        req.session.isLogin = false;
        req.session.idUser = null;
        req.session.userName = null;
        res.status(201).redirect('/');
    },
};