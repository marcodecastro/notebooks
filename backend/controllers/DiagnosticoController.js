import express from 'express';
import { getEsquemaEletrico } from '../services/EsquemaEletricoService';

const DiagnosticoController = express.Router();

DiagnosticoController.get('/', async (req, res) => {
  const esquemaEletrico = await getEsquemaEletrico(req.query.id);
  res.send(esquemaEletrico);
});

export default DiagnosticoController;
