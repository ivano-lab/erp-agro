const express = require('express');
const router = express.Router();
const FazendaController = require('../controllers/fazendaController');

router.get('/', FazendaController.getAllFazendas);
/*router.get('/:id', FazendaController.getFazendaById);
router.post('/', FazendaController.createFazenda);
router.put('/:id', FazendaController.updateFazenda);
router.delete('/:id', FazendaController.deleteFazenda);*/

module.exports = router;