const Post = require('./models/Post');
const Address = require('./models/Address');
const User = require('./models/User');
const Band = require('./models/Band');

// 1a1
// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });

// Añade una clave userId a la tabla addresses
Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });

// 1aN
// Usuario va a tener muchos posts o publicaciones
// Se añade una clave userId a la tabla posts
User.hasMany(Post, { as: "publicaciones", foreignKey: "autorId" });
// Se añade una clave userId a la tabla posts
Post.belongsTo(User, { as: "autor" });

// NaN
// El usuario pertenezca a varias bandas
// Esto crear una nueva tabla en la base de datos llamada user_band
// user.addBand user.getBands...etc.
User.belongsToMany(Band, { through: "user_band" });
Band.belongsToMany(User, { through: "user_band" });