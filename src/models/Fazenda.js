const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Fazenda = sequelize.define('Fazenda', {
  nome: DataTypes.STRING,
  localizacao: DataTypes.STRING, 
  hectares: DataTypes.FLOAT
});

module.exports = Fazenda;