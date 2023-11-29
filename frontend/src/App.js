import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route, Router } from 'react-router-dom';

import Home from './pages/Home';
import EsquemaEletrico from './pages/EsquemaEletrico.js';
import Diagnostico from './pages/Diagnostico.js';
import Relatorios from './pages/Relatorios.js';





const App = () => (
  
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/esquemas-eletricos" element={<EsquemaEletrico />} />
        <Route path="/esquemas-eletricos/:id" element={<EsquemaEletrico />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Switch>
  </Router>
  );


export default App;
