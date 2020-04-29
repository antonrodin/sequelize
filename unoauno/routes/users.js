const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Address = require('../database/models/Address');

router.get('/', (req, res) => {
    User.findAll({
        include: {
            model: Address,
            as: "domicilio",
            attributes: ['street']
        },
        attributes: ['name', 'age']
    }).then(users => res.json(users));
});

// CREATE /api/users
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;