import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EsquemaEletricoService from '../services/EsquemaEletricoService.js';
import DiagnosticoService from '../services/DiagnosticoService';

const Diagnostico = ({ match }) => {
  const [esquemaEletrico, setEsquemaEletrico] = useState(null);
  const [diagnostico, setDiagnostico] = useState(null);

  useEffect(() => {
    EsquemaEletricoService.obter(match.params.id)
      .then((esquemaEletrico) => {
        setEsquemaEletrico(esquemaEletrico);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [match.params.id]);

  useEffect(() => {
    if (esquemaEletrico) {
      DiagnosticoService.executar(esquemaEletrico)
        .then((diagnostico) => {
          setDiagnostico(diagnostico);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [esquemaEletrico]);

  return (
    <div className="container">
      <h1>Diagnóstico</h1>

      {esquemaEletrico && (
        <div>
          <img src={esquemaEletrico.imagem} alt={esquemaEletrico.nome} />
          <h2>{esquemaEletrico.nome}</h2>
          <p>{esquemaEletrico.descricao}</p>

          {diagnostico && (
            <div>
              <h3>Resultado do diagnóstico</h3>
              <p>{diagnostico.resultado}</p>
            </div>
          )}

          <Link to="/esquemas-eletricos" className="btn btn-primary">
            Voltar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Diagnostico;