import express from 'express';
import { getTestes } from '../services/TestesService';

const TestesController = express.Router();

TestesController.get('/', async (req, res) => {
  const testes = await getTestes();
  res.send(testes);
});

export default TestesController;
