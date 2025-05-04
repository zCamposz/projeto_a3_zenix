import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

// Define o ícone padrão dos marcadores
L.Marker.prototype.options.icon = L.icon({
iconUrl: icon,
shadowUrl: shadow,
});

function MapaAgencias() {
const agencias = [
{ id: 1, nome: 'Agência Central', lat: -23.55052, lng: -46.633308, regiao: 'Central' },
{ id: 2, nome: 'Agência Norte 1', lat: -23.5201, lng: -46.6201, regiao: 'Norte' },
{ id: 3, nome: 'Agência Norte 2', lat: -23.5151, lng: -46.6151, regiao: 'Norte' },
{ id: 4, nome: 'Agência Sul 1', lat: -23.5901, lng: -46.6401, regiao: 'Sul' },
{ id: 5, nome: 'Agência Sul 2', lat: -23.5951, lng: -46.6451, regiao: 'Sul' },
{ id: 6, nome: 'Agência Leste 1', lat: -23.5501, lng: -46.6001, regiao: 'Leste' },
{ id: 7, nome: 'Agência Leste 2', lat: -23.5551, lng: -46.5951, regiao: 'Leste' },
{ id: 8, nome: 'Agência Oeste 1', lat: -23.5501, lng: -46.6701, regiao: 'Oeste' },
{ id: 9, nome: 'Agência Oeste 2', lat: -23.5551, lng: -46.6751, regiao: 'Oeste' }
];

return (
<div className="map-container" style={{ height: '500px', width: '100%' }}>
<MapContainer center={[-23.55, -46.63]} zoom={12} style={{ height: '100%', width: '100%' }}>
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
{agencias.map(agencia => (
<Marker key={agencia.id} position={[agencia.lat, agencia.lng]}>
<Popup>
<strong>{agencia.nome}</strong><br />
Região: {agencia.regiao}
</Popup>
</Marker>
))}
</MapContainer>
</div>
);
}

export default MapaAgencias;