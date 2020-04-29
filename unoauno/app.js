const express = require('express');
const app = express();
const sequelize = require('./database/db');
require('./database/asociations');

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', function (req, res) {
    res.json("Hola Mundo");
});

app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));
app.use('/api/addresses', require('./routes/addresses'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: false }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});