var express = require('express');
var router = express.Router();
var receitasController = require('../controller/receitasController');

/* GET página principal. */
router.get('/', receitasController.listar);

module.exports = router;
