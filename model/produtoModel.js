const produtos = require('./produtos.json');

function listarProdutos() {
  return produtos;
}
function buscarPorId(id) {
  return produtos.find((produto) => produto.id === Number(id));
}

function inserirProduto(novoProduto) {
  const maiorId = produtos.length > 0 ? Math.max(...produtos.map((p) => p.id)) : 0;
  const proximoId = maiorId + 1;

  const produtoCriado = {
    id: proximoId,
    nome: novoProduto.nome,
    categoria: novoProduto.categoria,
    preco: Number(novoProduto.preco),
    estoque: Number(novoProduto.estoque)
  };

  produtos.push(produtoCriado);
  return produtoCriado;
}


module.exports = {
  listarProdutos,
  buscarPorId,
  inserirProduto
};

