const express = require('express');
const app = express();
const port = 3000;

// Rota GET /hello-world
app.get('/hello-world', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
