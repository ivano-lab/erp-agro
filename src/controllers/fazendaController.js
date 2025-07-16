const Fazenda = require('../models/Fazenda');

exports.criarFazenda = async (req, res) => {
  try {
    const fazenda = await Fazenda.create(req.body);
    res.status(201).json(fazenda);
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
};

exports.getAllFazendas = async (req, res) => {
  try {
    const fazendas = await Fazenda.findAll();
    res.status(200).json(fazendas);
} catch (err) {
  res.status(500).json({ erro: err.message });
  }
};