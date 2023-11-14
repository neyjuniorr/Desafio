const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());


const users = [];


app.post('/api/cadastrar-usuario', (req, res) => {
  const userData = req.body;

  
  if (!userData.name || !userData.email || !userData.password) {
    return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
  }

  
  users.push(userData);

  return res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
});


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
