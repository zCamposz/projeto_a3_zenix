import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // ou use os estilos direto no App.css

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Zenix</h2>
      <nav>
        <Link to="/">Mapa</Link>
        <Link to="/regiao/norte">Região Norte</Link>
        <Link to="/regiao/sul">Região Sul</Link>
        <Link to="/regiao/leste">Região Leste</Link>
        <Link to="/regiao/central">Região Central</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
