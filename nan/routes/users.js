const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Address = require('../database/models/Address');
const Post = require('../database/models/Post');

// mostrar todos los usuarios
router.get('/', (req, res) => {
    User.findAll({
        include: [{
            model: Address,
            as: "domicilio",
            attributes: ['street']
        }, {
            model: Post,
            as: "publicaciones",
            attributes: ['title', 'body'],
            where: {
                title: "Foo"
            }
        }],
        attributes: ['name', 'age']
    }).then(users => res.json(users));
});

// Ver la direccion de usuario /api/users/:id/domicilio
router.get('/:id/domicilio', (req, res) => {
    User.findByPk(req.params.id).then(user => {
        user.getDomicilio().then(domicilio => {
            res.json(domicilio);
        })
    });
});

// Ver las publicaciones de usuario /api/users/:id/publicaciones
router.get('/:id/publicaciones', (req, res) => {
    User.findByPk(req.params.id).then(user => {
        user.getPublicaciones().then(publicaciones => {
            res.json(publicaciones);
        })
    });
});

// Ver las bandas de usuario /api/users/:id/bandas
router.get('/:id/bandas', (req, res) => {
    User.findByPk(req.params.id).then(user => {
        user.getBands({ attributes: ['name', 'type'] }).then(bands => {
            res.json(bands);
        })
    });
});

// CREATE /api/users
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        domicilio: { 
            street: req.body.street
        }
    }, {
        include: "domicilio"
    }).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;