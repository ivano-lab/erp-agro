const Fazenda = require('../models/fazendaModel');

exports.criarFazenda = async (req, res) => {
  try {
    const fazenda = await Fazenda.create(req.body);
    res.status(201).json(fazenda);
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
};