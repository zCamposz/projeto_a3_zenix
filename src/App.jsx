import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetalhesAgencia from './components/DetalhesAgencia';
import MapaAgencias from './components/MapaAgencias';
import AgenciasPorRegiao from './components/AgenciasPorRegiao';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Sidebar fixado à esquerda */}
        <Sidebar />
        
        <div className="content-area">
          {/* Header centralizado e posicionado no topo */}
          <Header />

          {/* Espaço entre o Header e o Mapa */}
          <div className="map-container-spacer"></div>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<MapaAgencias />} />
              <Route path="/agencia/:id" element={<DetalhesAgencia />} />
              <Route path="/regiao/:regiao" element={<AgenciasPorRegiao />} />
            </Routes>
          </main>
          
          {/* Footer na parte inferior */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
