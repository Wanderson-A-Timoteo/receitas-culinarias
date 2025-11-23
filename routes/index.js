var express = require('express');
var router = express.Router();
var receitasController = require('../controller/receitasController');

/* GET página principal. */
router.get('/', receitasController.listar);

// GET: Formulário de nova receita
router.get('/receita/nova', receitasController.nova);

// POST: Salvar nova receita
router.post('/receita/nova', receitasController.salvar);

// GET: Consultar Receita
router.get('/receita/:id', receitasController.detalhes);

// GET: Consultar Receita
router.get('/receita/:id', receitasController.detalhes);

// GET: Excluir Receita
router.get('/receita/excluir/:id', receitasController.excluir);

module.exports = router;
