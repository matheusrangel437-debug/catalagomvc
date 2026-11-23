const produtoModel = require('../model/produtoModel');

function buscarTodos(req, res) {
  const lista = produtoModel.listarProdutos();
  res.status(200).json(lista);
}
function buscarPorId(req, res) {
  const { id } = req.params;
  const produto = produtoModel.buscarPorId(id);

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado.' });
  }

  res.status(200).json(produto);
}

function criarProduto(req, res) {
  const { nome, categoria, preco, estoque } = req.body;

  if (!nome || !categoria || preco === undefined || estoque === undefined) {
    return res.status(400).json({
      erro: 'Todos os campos (nome, categoria, preco, estoque) são obrigatórios.'
    });
  }

  const novoProduto = produtoModel.inserirProduto({
    nome,
    categoria,
    preco,
    estoque
  });

  res.status(201).json(novoProduto);
}

module.exports = {
  buscarTodos,
  buscarPorId,
  criarProduto
};
