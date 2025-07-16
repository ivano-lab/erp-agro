const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Fazenda = sequelize.define(
  'Fazenda', 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNUll: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    localizacao: {
      type: DataTypes.STRING,
      allowNUll: false,  
    },
    hectares: {
      type: DataTypes.FLOAT,
      allowNUll: false,
    },
    tipo_pessoa: {
      type: DataTypes.STRING,
      allowNull: false,
      validade: {
        isIn: [['Física', 'Jurídica']]
      },
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true,
      validade: {
        cpfRequiredIfFisica(value) {
          if (this.tipo_pessoa === 'Física' && !value) {
            throw new Error('CPF é obrigatório para tipo pessoa Física.');
          }
        }
      }
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true,
      validade: {
        cnpjRequiredIfJuridica(value) {
          if (this.tipo_pessoa === 'Jurídica' && !value) {
            throw new Error('CNPJ é obrigatório para tipo pessoa Jurídica.');
          }
        }
      }
    },
    proprietario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inscricao_estatudal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    razao_social: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_abertura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
  tableName: 'fazendas',
  timestamps: false,
  validade: {
    cpfOrCnpjMandatory() {
      if (this.tipo_pessoa ===  'Física' && !this.cpf) {
        throw new Error('CPF é obrigatório para pessoa física.');
      }
      if (this.tipo_pessoa ===  'Jurídica' && !this.cpf) {
        throw new Error('CNPJ é obrigatório para pessoa jurídica.');
      }
    }
  }
});

module.exports = Fazenda;