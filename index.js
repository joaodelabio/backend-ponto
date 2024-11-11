const express = require('express');
const app = express();

const sequelize = require('./config/db');

// app.METODO('rota/caminho', (req, res) => {})

app.get('/users', (req, res) => {
    res.send("nessa rota vou cagar nos usuarios. -passaro");
});

app.post('/users', (req, res) => {
    res.send("cagando nos outros via post. -passaro");
});

app.get('/user/:id', (req, res) => {
    res.send(`o passaro cagou em ${req.params.id}`);
});

app.post('/user/:id1-:id2', (req, res) => {
    res.send(req.params);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`o passaro cagou na porta ${PORT}`);
});