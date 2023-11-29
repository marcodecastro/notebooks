import axios from 'axios';

const DiagnosticoService = {
  executar(esquemaEletrico) {
    return axios.post('/api/diagnosticos', esquemaEletrico);
  },
};

export default DiagnosticoService;
