import React from 'react';
import Header from './components/Header';

function Home() {
  return (
    <div>
      <Header />
      <MapaAgencias />
      <ListaAgenciasPorRegiao />
    </div>
  );
}

export default Home;
