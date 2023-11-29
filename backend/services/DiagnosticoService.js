import mongoose from 'mongoose';
import Componente from '../models/Componente.js';
import EsquemaEletrico from '../models/EsquemaEletrico.js';



class DiagnosticoService {
  async getComponentes(esquemaEletricoId) {
    const componentes = await Componente.find({esquemaEletricoId});
    return componentes;
  }

  async getTestes(componenteId) {
    const testes = await Teste.find({componenteId});
    return testes;
  }

  async executarTestes(componenteId, testes) {
    const resultados = await Promise.all(
      testes.map((teste) => teste.executar(componenteId))
    );
    return resultados;
  }

  async diagnosticar(esquemaEletricoId) {
    const componentes = await this.getComponentes(esquemaEletricoId);
    const problemas = [];
    for (const componente of componentes) {
      const testes = await this.getTestes(componente.id);
      const resultados = await this.executarTestes(componente.id, testes);
      for (const resultado of resultados) {
        if (resultado.falhou) {
          problemas.push({
            componenteId: componente.id,
            testeId: resultado.testeId,
            erro: resultado.erro,
          });
        }
      }
    }
    return problemas;
  }
}

export default DiagnosticoService;