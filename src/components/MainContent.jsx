import MapaAgencias from './MapaAgencias';

function MainContent() {
  return (
    <main style={{ padding: '20px' }}>
      <h2><p>Veja a agência desejada</p></h2>
      <h3 className="text-2xl font-bold p-4">Mapa de Agências</h3>
      <MapaAgencias />
    </main>
  );
}

export default MainContent;
