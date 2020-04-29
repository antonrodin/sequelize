const Post = require('./models/Post');
const Address = require('./models/Address');
const User = require('./models/User');

// Uno a uno

// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });

// Añade una clave userId a la tabla addresses
Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });