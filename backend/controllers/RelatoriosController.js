import express from 'express';
import { getRelatorios } from '../services/RelatoriosService';

const RelatoriosController = express.Router();

RelatoriosController.get('/', async (req, res) => {
  const relatorios = await getRelatorios();
  res.send(relatorios);
});

export default RelatoriosController;
