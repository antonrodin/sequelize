const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Address = require('../database/models/Address');

router.get('/', (req, res) => {
    Address.findAll({
        include: {
            model: User,
            as: "residente",
            attributes: ['name', 'age']
        }
    }).then(addresses => res.json(addresses));
});

module.exports = router;