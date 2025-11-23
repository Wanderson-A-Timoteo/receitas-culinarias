var express = require('express');
var router = express.Router();
var receitasController = require('../controller/receitasController');

/* GET página principal. */
router.get('/', receitasController.listar);

/* GET página sobre */
router.get('/sobre', receitasController.sobre);

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

// GET: Formulário de Edição
router.get('/receita/editar/:id', receitasController.editar);

// POST: Salvar Edição
router.post('/receita/editar/:id', receitasController.atualizar);

// GET: Página de Pesquisa
router.get('/pesquisa', receitasController.pesquisar);

module.exports = router;
