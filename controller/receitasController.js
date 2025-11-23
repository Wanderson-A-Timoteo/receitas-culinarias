const receitasModel = require('../model/receitasMemoria');

module.exports = {
    // Lista todas as receitas na Home
    listar: (req, res) => {
        const listaReceitas = receitasModel.listar();
        res.render('index', { 
            title: 'Sistema de Receitas', 
            receitas: listaReceitas,
            activeHome: true 
        });
    },

    // GET: Mostra o formulário de criação
    nova: (req, res) => {
        res.render('novaReceita', { 
            title: 'Nova Receita',
            activeNova: true // Destacar o menu
        });
    },

    // GET: Detalhes da receita
    detalhes: (req, res) => {
        const id = req.params.id;
        const receita = receitasModel.consultar(id);
        
        if (receita) {
            res.render('consultaReceita', { 
                title: 'Detalhes da Receita',
                receita: receita
            });
        } else {
            // Se não achar (ex: ID inválido), volta pra home
            res.redirect('/');
        }
    },

    // POST: Recebe os dados e salva
    salvar: (req, res) => {
        const { titulo, ingredientes, preparo, tempo } = req.body;
        
        // Chama o model para criar a receita
        receitasModel.criar(titulo, ingredientes, preparo, tempo);
        
        // Redireciona para a página principal
        res.redirect('/');
    },

    // GET: Excluir receita
    excluir: (req, res) => {
        const id = req.params.id;
        receitasModel.excluir(id);
        res.redirect('/');
    }
};
