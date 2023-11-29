import mongoose from 'mongoose';
import Relatorio from '../models/Relatorio.js';


class RelatoriosService {
  async criarRelatorio(relatorio) {
    const relatorioCriado = await Relatorio.create(relatorio);
    return relatorioCriado;
  }

  async getRelatorios() {
    const relatorios = await Relatorio.find();
    return relatorios;
  }

  async getRelatorio(id) {
    const relatorio = await Relatorio.findById(id);
    return relatorio;
  }

  async atualizarRelatorio(id, relatorio) {
    const relatorioAtualizado = await Relatorio.findByIdAndUpdate(id, relatorio);
    return relatorioAtualizado;
  }

  async deletarRelatorio(id) {
    const relatorioDeletado = await Relatorio.findByIdAndDelete(id);
    return relatorioDeletado;
  }
}

export default RelatoriosService;