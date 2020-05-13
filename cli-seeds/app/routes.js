const express = require('express');
const router = express.Router();

// Importar controladores
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

// Home
router.get('/', (req, res) => res.json({ foo: "bar" }));

// Users
router.get('/users', UserController.all);
router.get('/addresses', AddressController.all);

module.exports = router;