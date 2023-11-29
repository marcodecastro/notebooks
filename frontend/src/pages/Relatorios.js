import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatoriosService from '../services/RelatoriosService.js';

const Relatorios = () => {
  const [relatorios, setRelatorios] = useState([]);

  useEffect(() => {
    RelatoriosService.listar()
      .then((relatorios) => {
        setRelatorios(relatorios);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Relatórios</h1>

      <div className="row">
        {relatorios.map((relatorio) => (
          <div key={relatorio.id} className="col-md-4">
            <div className="card">
              <img src={relatorio.imagem} alt={relatorio.nome} />
              <div className="card-body">
                <h5 className="card-title">{relatorio.nome}</h5>
                <p className="card-text">{relatorio.descricao}</p>
                <Link to={`/relatorios/${relatorio.id}`} className="btn btn-primary">
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/relatorios/gerar" className="btn btn-primary">
        Gerar relatório
      </Link>
    </div>
  );
};

export default Relatorios;