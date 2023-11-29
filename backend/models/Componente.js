import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ComponenteSchema = new Schema({
    nome: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    esquemaEletricoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EsquemaEletrico',
      required: true,
    },
  });

    export default mongoose.model('Componente', ComponenteSchema);