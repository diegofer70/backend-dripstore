const express = require('express');
const Option = require('./models/User');
const Options = require('../models/options');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const user = await Option.create(req.body);
    res.json(Options);
  } catch (error) {
    res.status(500).json({ error: 'Erro de seleção' });
  }
});

app.listen(10000, () => {
  console.log('Servidor rodando na porta 10000');
});
