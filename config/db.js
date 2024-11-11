const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ponto_eletronico', 'postgres', 'ceub123456', {
    host:'localhost',
    dialect:'postgres'
});

module.exports