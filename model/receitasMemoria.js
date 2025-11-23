// Banco de dados em memória (Array de objetos)
// Requisitos: ID, Título, Ingredientes, Modo de Preparo, Tempo de Preparo
let receitas = [];
let proximoId = 1;

module.exports = {
  // Cria uma nova receita
  criar(titulo, ingredientes, preparo, tempo) {
    const novaReceita = {
      id: proximoId++,
      titulo: titulo,
      ingredientes: ingredientes,
      preparo: preparo,
      tempo: parseInt(tempo)
    };
    receitas.push(novaReceita);
    return novaReceita;
  },

  // Retorna todas as receitas
  listar() {
    return receitas;
  },

  // Busca uma receita pelo ID
  consultar(id) {
    // O ID vem da URL como string, por isso o parseInt
    return receitas.find(r => r.id === parseInt(id));
  },

  // Atualiza uma receita existente
  atualizar(id, titulo, ingredientes, preparo, tempo) {
    const index = receitas.findIndex(r => r.id === parseInt(id));
    if (index !== -1) {
      receitas[index] = {
        id: parseInt(id),
        titulo: titulo,
        ingredientes: ingredientes,
        preparo: preparo,
        tempo: parseInt(tempo)
      };
      return receitas[index];
    }
    return null;
  },

  // Remove uma receita
  excluir(id) {
    const index = receitas.findIndex(r => r.id === parseInt(id));
    if (index !== -1) {
      receitas.splice(index, 1);
      return true;
    }
    return false;
  },
  
  // Pesquisa por título (case insensitive)
  pesquisar(termo) {
    if (!termo) return [];
    const termoLower = termo.toLowerCase();
    return receitas.filter(r => r.titulo.toLowerCase().includes(termoLower));
  }
};
