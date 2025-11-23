const receitasModel = require('../model/receitasMemoria');

module.exports = {
    listar: (req, res) => {
        const listaReceitas = receitasModel.listar();

        res.render('index', { 
            title: 'Sistema de Receitas', 
            receitas: listaReceitas,
            activeHome: true // Marcar o menu como ativo
        });
    }
};
