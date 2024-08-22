require('dotenv').config();
const express = require('express');
const PORT = 10000;

const app = express();

app.get('/', (req, res) => { 
    res.send('Olá, Mundo!') 
});

// app.MÉTODO( '/CAMINHO A SER SEGUIDO (path)', FUNÇÃO A SER EXECUTADA )

app.listen(PORT, () => {
    console.log('Servidor rodando em: http://localhost:' + PORT)
});

module.exports = { app };