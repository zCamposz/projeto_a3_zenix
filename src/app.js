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
        <Sidebar />  {/* Sidebar fixo à esquerda */}
        <div className="content-container">
          <Header />  {/* Header no topo, acima do conteúdo */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<MapaAgencias />} />
              <Route path="/agencia/:id" element={<DetalhesAgencia />} />
              <Route path="/regiao/:regiao" element={<AgenciasPorRegiao />} />
            </Routes>
          </div>
          <Footer />  {/* Footer na parte inferior da tela */}
        </div>
      </div>
    </Router>
  );
}

export default App;
