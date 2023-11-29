import axios from 'axios';

const RelatoriosService = {
  listar() {
    return axios.get('/api/relatorios');
  },

  obter(id) {
    return axios.get(`/api/relatorios/${id}`);
  },

  gerar() {
    return axios.post('/api/relatorios/gerar');
  },
};

export default RelatoriosService;