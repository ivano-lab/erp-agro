const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Fazenda = sequelize.define('Fazenda', {
  nome: Datatypes.STRING,
  localizacao: Datatypes.STRING, 
  hectares: DataTypes.FLOAT
});

module.exports = Fazenda;