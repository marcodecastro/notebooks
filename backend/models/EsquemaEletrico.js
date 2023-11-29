import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EsquemaEletricoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
  },
  componentes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Componente',
  }],
});

export default mongoose.model('EsquemaEletrico', EsquemaEletricoSchema);

