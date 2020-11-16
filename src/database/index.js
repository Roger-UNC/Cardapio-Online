const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Cliente = require('../models/Cliente');
const Restaurante = require('../models/Restaurante');
const Produto = require('../models/Produto');
const Reserva = require('../models/Reserva');

const connection = new Sequelize(databaseConfig);

Cliente.init(connection);
Restaurante.init(connection);
Produto.init(connection);
Reserva.init(connection);

Produto.associate(connection.models)
Reserva.associate(connection.models)

module.exports = connection;