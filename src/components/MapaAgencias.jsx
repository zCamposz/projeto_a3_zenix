import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'
import { Dialog } from 'primereact/dialog'
import { Panel } from 'primereact/panel'
import 'primereact/resources/themes/lara-dark-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

L.Marker.prototype.options.icon = L.icon({ iconUrl: icon, shadowUrl: shadow })

export default function MapaAgencias() {
  const [dialogInfo, setDialogInfo] = useState(null)
  const [visible, setVisible] = useState(false)

  const agencias = [
    { id: 1, nome: 'Agência Central', lat: -23.55052, lng: -46.633308, regiao: 'Central' },
    { id: 2, nome: 'Agência Norte 1', lat: -23.5251, lng: -46.6201, regiao: 'Norte' },
    { id: 3, nome: 'Agência Norte 2', lat: -23.5151, lng: -46.6151, regiao: 'Norte' },
    { id: 4, nome: 'Agência Sul 1', lat: -23.5907, lng: -46.6401, regiao: 'Sul' },
    { id: 5, nome: 'Agência Sul 2', lat: -23.607, lng: -46.6451, regiao: 'Sul' },
    { id: 6, nome: 'Agência Leste 1', lat: -23.5451, lng: -46.6001, regiao: 'Leste' },
    { id: 7, nome: 'Agência Leste 2', lat: -23.5551, lng: -46.5951, regiao: 'Leste' },
    { id: 8, nome: 'Agência Oeste 1', lat: -23.5451, lng: -46.6701, regiao: 'Oeste' },
    { id: 9, nome: 'Agência Oeste 2', lat: -23.5551, lng: -46.6751, regiao: 'Oeste' }
  ]

  const consultarIA = async (agencia) => {
    const body = {
      nome: agencia.nome,
      endereco: `Coordenadas: ${agencia.lat}, ${agencia.lng}`,
      status: true,
      horario: '09:00 às 17:00',
      manutencao: false
    }

    try {
      const res = await fetch('http://localhost:3001/agencia/analise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      setDialogInfo({ ...agencia, resposta: data.resposta })
      setVisible(true)
    } catch (error) {
      console.error('Erro na consulta:', error)
      setDialogInfo({ ...agencia, resposta: 'Erro ao consultar IA.' })
      setVisible(true)
    }
  }

return (
  <div className="w-full p-4 bg-gray-100 min-h-screen">
    <Panel header="Bem-vindo ao Zenix!" className="mb-4" style={{ width: '100%' }}>
      <MapContainer center={[-23.55, -46.63]} zoom={12} style={{ height: '80vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {agencias.map((agencia) => (
          <Marker
            key={agencia.id}
            position={[agencia.lat, agencia.lng]}
            eventHandlers={{ click: () => consultarIA(agencia) }}
          />
        ))}
      </MapContainer>
    </Panel>

    <Dialog
      header={dialogInfo ? dialogInfo.nome : ''}
      visible={visible}
      onHide={() => setVisible(false)}
      position="right"
      style={{ width: '30vw' }}
      className="p-dialog-dark"
      closable={true}
      closeIcon={<i className="pi pi-times" style={{ fontSize: '1.25rem' }} />}
    >
      {dialogInfo && (
        <div className="space-y-2">
          <p><i className="pi pi-map-marker mr-2" />Região: {dialogInfo.regiao}</p>
          <p className="whitespace-pre-wrap text-sm">{dialogInfo.resposta}</p>
        </div>
      )}
    </Dialog>
  </div>
)}