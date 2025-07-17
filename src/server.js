require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/db');
const Fazenda = require('./models/Fazenda');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ alter: true});
    console.log('Banco de dados sincronizado.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.log('Erro ao sincronizar banco de dados:', error);
  }
});