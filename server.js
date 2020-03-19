const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando o app
const app = express();
app.use(express.json()); // permitir que envie dados para a aplicacao no formato json

// Iniciando o database 
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

requireDir('./src/models');


// Rotas
// recebe todo tipo de requisicao
// toda requisicao a partir da rota /api será enviado para o arquivo /src/routes
app.use('/api', require('./src/routes')); 

app.listen(3001); // aplicacao vai ouvir a porta 3001

