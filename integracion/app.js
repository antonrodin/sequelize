const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');

// Setting
const PORT = process.env.PORT || 3000;

// Rutas
app.get('/', function (req, res) {

    User.create({
        name: "Pepe",
        birthday: new Date(1999, 4, 6)
    }).then(user => {
        res.json(user);
    });

    // User.findAll().then(users => {
    //     res.json(users);
    // });

});

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arranado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: true }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});