const sequelize = require('./database/db');
const Post = require('./database/models/Post');
const User = require('./database/models/User');
const Address = require('./database/models/Address');
const Band = require('./database/models/Band');
require('./database/asociations');

// Usuarios
const users = [
    { name: "Anton", email: "azr@azr.es", age: 18, role: 0 },
    { name: "Pepe", email: "pepe@gmail.com", age: 38, role: 1 },
    { name: "Lucia", email: "lucia@hotmail.com", age: 88, role: 0 },
];

// Direcciones
const addresses = [
    { street: "Calle de la vida 2", residente_id: 1 },
    { street: "Debajo del puente s/n", residente_id: 2 },
    { street: "Isla de Tabarca, 5", residente_id: 3 },
];

// Entradas
const posts = [
    { title: "Foo", body: "Bar 1", autorId: 1 },
    { title: "Foo", body: "Bar 2", autorId: 1 },
    { title: "Title", body: "Bar 3", autorId: 1 },
    { title: "Yo que se", body: "Bar 4", autorId: 1 },
    { title: "Me da igual", body: "Bar 5", autorId: 2 },
    { title: "Todo", body: "Bar 6", autorId: 2 },
    { title: "Foo", body: "Bar 7", autorId: 3 },
];


sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    users.forEach(user => User.create(user));
}).then(() => {
    // Rellenar direcciones
    addresses.forEach(address => Address.create(address));
}).then(() => {
    // Rellenar posts
    posts.forEach(post => Post.create(post));

}).then(async () => {

    let band1 = await Band.create({
        name: "Los abrazafarolas",
        type: "Rock",
        users: [
            { name: "Lucia", age: 18, email: "lucia@gmail.com" },
            { name: "Alberto", age: 22, email: "alberto@gmail.com" },
        ]
    }, {
        include: "users"
    });

    let user1 = await User.create({ name: "Sergio", age: 38, email: "sergio@gmail.com" });
    let user2 = await User.create({ name: "Monica", age: 44, email: "monica@gmail.com" });

    let band2 = await Band.create({
        name: "Los Picateclas",
        type: "Death Metal"
    });

    // band2.addUsers([ user1, user2 ]);
    band2.addUser(user1);
    band2.addUser(user2);

    // Nuevo usuario
    let user3 = await User.create({ name: "Paula", age: 16, email: "paula@gmail.com" });
    user3.setBands([band1, band2]);

});