import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RelatorioSchema = new Schema({
  data: {
    type: Date,
    required: true,
  },
  esquemaEletricoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EsquemaEletrico',
    required: true,
  },
  problemas: [{
    componenteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Componente',
    },
    testeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teste',
    },
    erro: {
      type: String,
      required: true,
    },
  }],
});

export default mongoose.model('Relatorio', RelatorioSchema);


