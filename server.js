const express = require('express');
const produtoController = require('./controller/produtoController');

const app = express();
const PORT = 3366;
app.use(express.json());
app.get('/produtos', produtoController.buscarTodos);
app.get('/produtos/:id', produtoController.buscarPorId);
app.post('/produtos', produtoController.criarProduto);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
