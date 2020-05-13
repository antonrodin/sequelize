const express = require('express');
const app = express();
const { connection } = require('./database/db'); 

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require('./routes'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    connection.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});