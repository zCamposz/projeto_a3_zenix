import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetalhesAgencia from './components/DetalhesAgencia';
import MapaAgencias from './components/MapaAgencias';
import AgenciasPorRegiao from './components/AgenciasPorRegiao';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <Router>
          <HeaderBar />  {/* Header no topo, acima do conteúdo */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<MapaAgencias />} />
              <Route path="/agencia/:id" element={<DetalhesAgencia />} />
              <Route path="/regiao/:regiao" element={<AgenciasPorRegiao />} />
            </Routes>
          </div>
          <Footer />  {/* Footer na parte inferior da tela */}
    </Router>
    
  );
}

export default App;
