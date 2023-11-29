import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EsquemaEletricoService from '../services/EsquemaEletricoService.js';

const EsquemaEletrico = ({ match }) => {
  const [esquemaEletrico, setEsquemaEletrico] = useState(null);

  useEffect(() => {
    EsquemaEletricoService.obter(match.params.id)
      .then((esquemaEletrico) => {
        setEsquemaEletrico(esquemaEletrico);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [match.params.id]);

  return (
    <div className="container">
      <h1>Esquema elétrico</h1>

      {esquemaEletrico && (
        <div>
          <img src={esquemaEletrico.imagem} alt={esquemaEletrico.nome} />
          <h2>{esquemaEletrico.nome}</h2>
          <p>{esquemaEletrico.descricao}</p>

          <Link to="/esquemas-eletricos" className="btn btn-primary">
            Voltar
          </Link>
        </div>
      )}
    </div>
  );
};

export default EsquemaEletrico;