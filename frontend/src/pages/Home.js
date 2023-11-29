import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EsquemaEletricoService from '../services/EsquemaEletricoService';

const Home = () => {
  const [esquemasEletricos, setEsquemasEletricos] = useState([]);

  useEffect(() => {
    EsquemaEletricoService.listar()
      .then((esquemasEletricos) => {
        setEsquemasEletricos(esquemasEletricos);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Página inicial</h1>

      <div className="row">
        {esquemasEletricos.map((esquemaEletrico) => (
          <div key={esquemaEletrico.id} className="col-md-4">
            <div className="card">
              <img src={esquemaEletrico.imagem} alt={esquemaEletrico.nome} />
              <div className="card-body">
                <h5 className="card-title">{esquemaEletrico.nome}</h5>
                <p className="card-text">{esquemaEletrico.descricao}</p>
                <Link to={`/esquemas-eletricos/${esquemaEletrico.id}`} className="btn btn-primary">
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/esquemas-eletricos" className="btn btn-primary">
        Ver todos os esquemas elétricos
      </Link>
    </div>
  );
};

export default Home;