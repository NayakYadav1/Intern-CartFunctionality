const { Router } = require('express');
const userController = require('../controllers/userController');

Router.post('/', userController.createUser)