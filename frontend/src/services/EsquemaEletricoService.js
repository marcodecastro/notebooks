import axios from 'axios';

const EsquemaEletricoService = {
  listar() {
    return axios.get('/api/esquemas-eletricos');
  },

  obter(id) {
    return axios.get(`/api/esquemas-eletricos/${id}`);
  },
};

export default EsquemaEletricoService;
