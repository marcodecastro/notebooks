import express from 'express';
import cors from 'cors';
import  getEsquemaEletricos  from './services/EsquemaEletricoService.js';
import  DiagnosticoService  from './services/DiagnosticoService.js';
import  getRelatorios  from './services/RelatoriosService.js';
import database from './database/database.js';


const app = express();

app.use(cors());

database.connect();


app.get('/esquemaEletricos', async (req, res) => {
  const esquemasEletricos = await getEsquemaEletricos();
  res.send(esquemasEletricos);
});

app.post('/diagnosticar', async (req, res) => {
  const esquemaEletricoId = req.body.esquemaEletricoId;
  const problemas = await diagnosticar(esquemaEletricoId);
  res.send(problemas);
});

app.get('/relatorios', async (req, res) => {
  const relatorios = await getRelatorios();
  res.send(relatorios);
});

// Iniciar o servidor
app.listen(4000, () => {
  console.log('Servidor iniciado na porta 4000');
});
