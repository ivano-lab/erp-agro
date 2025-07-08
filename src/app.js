const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const fazendaRoutes = require('./routes/fazendaRoutes');
/*const areaRoutes = require('./area');       
const culturaRoutes = require('./cultura');
const insumoRoutes = require('./insumo');
const atividadeRoutes = require('./atividade');*/

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..','public')));
app.use('/api/fazenda', fazendaRoutes);
/*app.use('/api/area', areaRoutes);
app.use('/api/cultura', culturaRoutes);
app.use('/api/insumo', insumoRoutes);
app.use('/api/atividade', atividadeRoutes);*/

app.get('/', (req, res) => {
  res.send('API Sistema de Gestão de Fazenda!');
});

module.exports = app; 