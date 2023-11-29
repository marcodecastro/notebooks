import mongoose from 'mongoose';
import EsquemaEletrico from '../models/EsquemaEletrico.js';


class EsquemaEletricoService {
  async getEsquemaEletrico(id) {
    const esquemaEletrico = await EsquemaEletrico.findById(id);
    return esquemaEletrico;
  }

  async getEsquemaEletricoPorNome(nome) {
    const esquemaEletrico = await EsquemaEletrico.findOne({nome});
    return esquemaEletrico;
  }

  async getEsquemaEletricos() {
    const esquemaEletricos = await EsquemaEletrico.find();
    return esquemaEletricos;
  }

  async criarEsquemaEletrico(esquemaEletrico) {
    const esquemaEletricoCriado = await EsquemaEletrico.create(esquemaEletrico);
    return esquemaEletricoCriado;
  }

  async atualizarEsquemaEletrico(id, esquemaEletrico) {
    const esquemaEletricoAtualizado = await EsquemaEletrico.findByIdAndUpdate(id, esquemaEletrico);
    return esquemaEletricoAtualizado;
  }

  async deletarEsquemaEletrico(id) {
    const esquemaEletricoDeletado = await EsquemaEletrico.findByIdAndDelete(id);
    return esquemaEletricoDeletado;
  }
}

export default EsquemaEletricoService;