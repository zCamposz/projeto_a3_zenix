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
import './PerguntaBox.css'

L.Marker.prototype.options.icon = L.icon({ iconUrl: icon, shadowUrl: shadow })

export default function MapaAgencias() {
  const [dialogInfo, setDialogInfo] = useState(null)
  const [visible, setVisible] = useState(false)
  const [pergunta, setPergunta] = useState('')
  const [respostaIA, setRespostaIA] = useState('')
  const [carregando, setCarregando] = useState(false)

  const agencias = [
  {
    id: 1,
    nome: 'Agência  Paulista',
    endereco: 'Av. Paulista, 1230 - Bela Vista, São Paulo - SP',
    lat: -23.561684,
    lng: -46.655981,
    regiao: 'Central'
  },
  {
    id: 2,
    nome: 'Agência  Santana',
    endereco: 'Rua Voluntários da Pátria, 4000 - Santana, São Paulo - SP',
    lat: -23.500998,
    lng: -46.624657,
    regiao: 'Norte'
  },
  {
    id: 3,
    nome: 'Agência  Mooca',
    endereco: 'Rua da Mooca, 1900 - Mooca, São Paulo - SP',
    lat: -23.554963,
    lng: -46.589157,
    regiao: 'Leste'
  },
  {
    id: 4,
    nome: 'Agência  Santo Amaro',
    endereco: 'Av. Adolfo Pinheiro, 1200 - Santo Amaro, São Paulo - SP',
    lat: -23.651920,
    lng: -46.705317,
    regiao: 'Sul'
  },
  {
    id: 5,
    nome: 'Agência  Lapa',
    endereco: 'Rua Clélia, 2300 - Lapa, São Paulo - SP',
    lat: -23.525435,
    lng: -46.685489,
    regiao: 'Oeste'
  },
  {
    id: 6,
    nome: 'Prime Tutoia-Urb.SP',
    endereco: 'Rua Tutoia, 892 1 Pavimento - Vila Mariana, São Paulo - SP',
    lat: -23.561684,
    lng: -46.655981,
    regiao: 'Sul'
  },
  {
    id: 7,
    nome: 'Prime Av. Antártica',
    endereco: 'Av. Antártica, 608 Pavimento Superior - Água Branca, São Paulo - SP',
    lat: -23.5227,
    lng: -46.6714,
    regiao: 'Oeste'
  },
  {
    id: 8,
    nome: 'Prime V. Clementino',
    endereco: 'Rua Domingos de Morais, 2072 1 Andar - Vila Mariana, São Paulo - SP',
    lat: -23.5772,
    lng: -46.6402,
    regiao: 'Sul'
  },
  {
    id: 9,
    nome: 'Prime R. Boa Vista',
    endereco: 'Rua Boa Vista, 228 Mezanino - Centro, São Paulo - SP',
    lat: -23.5505,
    lng: -46.6333,
    regiao: 'Central'
  },
  {
    id: 10,
    nome: 'Prime Indianopolis',
    endereco: 'Av. Indianópolis, 2008 Pavimento Superior - Indianópolis, São Paulo - SP',
    lat: -23.6067,
    lng: -46.6694,
    regiao: 'Sul'
  },
  {
    id: 11,
    nome: 'Prime H. Penteado-USP',
    endereco: 'Rua Heitor Penteado, 1833 Pavimento Superior - Sumarézinho, São Paulo - SP',
    lat: -23.54414,
    lng: -46.69394,
    regiao: 'Oeste'
  },
  {
    id: 12,
    nome: 'Prime Av. Sumare-USP',
    endereco: 'Av. Sumaré, 1139 - Perdizes, São Paulo - SP',
    lat: -23.5525,
    lng: -46.6886,
    regiao: 'Oeste'
  },
  {
    id: 13,
    nome: 'Urb Barra Funda',
    endereco: 'Praça Pascoal Martins, 130/138 - Barra Funda, São Paulo - SP',
    lat: -23.5294,
    lng: -46.6692,
    regiao: 'Oeste'
  },
  {
    id: 14,
    nome: 'Urb Berrini',
    endereco: 'Av. Eng. Luiz C. Berrini, 933 - Chácara Monte Alegre, São Paulo - SP',
    lat: -23.5961,
    lng: -46.6926,
    regiao: 'Sul'
  },
  {
    id: 15,
    nome: 'Urb Oscar Freire',
    endereco: 'Rua Oscar Freire, 440 - Jardim Paulistano, São Paulo - SP',
    lat: -23.5617,
    lng: -46.6644,
    regiao: 'Oeste'
  },
  {
    id: 16,
    nome: 'Urb Jardim Aricanduva',
    endereco: 'Av. Rio das Pedras, 341 - Jardim Aricanduva, São Paulo - SP',
    lat: -23.5792123,
    lng: -46.5025775,
    regiao: 'Leste'
  },
  {
    id: 17,
    nome: 'Urb Heitor Penteado',
    endereco: 'Rua Heitor Penteado, 1881 - Vila Madalena, São Paulo - SP',
    lat: -23.54414,
    lng: -46.69394,
    regiao: 'Oeste'
  },
  {
    id: 18,
    nome: 'Urb Nova Sumare',
    endereco: 'Av. Sumaré, 1267 - Perdizes, São Paulo - SP',
    lat: -23.5525,
    lng: -46.6886,
    regiao: 'Oeste'
  },
  {
    id: 19,
    nome: 'Urb Pacaembu',
    endereco: 'Pça Charles Miller, 02 - Pacaembu, São Paulo - SP',
    lat: -23.5505,
    lng: -46.6333,
    regiao: 'Oeste'
  },
  {
    id: 20,
    nome: 'Urb Cambuci',
    endereco: 'Av. Lins de Vasconcelos, 187 - Cambuci, São Paulo - SP',
    lat: -23.5729,
    lng: -46.6228,
    regiao: 'Central'
  },
  {
    id: 21,
    nome: 'Urb Vila Prel',
    endereco: 'Estrada de Itapecerica, 2611 - Vila Prel, São Paulo - SP',
    lat: -23.6519,
    lng: -46.7053,
    regiao: 'Sul'
  },
  {
    id: 22,
    nome: 'Prime Av. Angelica',
    endereco: 'Av. Angelica, 2011 - Santa Cecília, São Paulo - SP',
    lat: -23.5505,
    lng: -46.6333,
    regiao: 'Central'
  },
  {
    id: 23,
    nome: 'Prime Pça S. Romero',
    endereco: 'Rua Tuiuti, 2208 Conjunto 2 - Tatuapé, São Paulo - SP',
    lat: -23.5333,
    lng: -46.5672,
    regiao: 'Leste'
  },
  {
    id: 24,
    nome: 'R. Boa Vista-USP',
    endereco: 'Rua Boa Vista, 228 - Centro, São Paulo - SP',
    lat: -23.5505,
    lng: -46.6333,
    regiao: 'Central'
  },
  {
    id: 25,
    nome: 'Prime PC. Panamerican',
    endereco: 'Praça Panamericana, 100 Pavimento Superior - Alto de Pinheiros, São Paulo - SP',
    lat: -23.5563,
    lng: -46.6978,
    regiao: 'Oeste'
  },
   {
    id: 26,
    nome: 'Prime G. Cotching',
    endereco: 'Rua Guilherme Cotching, 800 - Vila Maria, São Paulo - SP',
    lat: -23.5151342,
    lng: -46.5873138,
    regiao: 'Norte'
  },
  {
    id: 27,
    nome: 'Prime JD. França',
    endereco: 'Rua Jardim França, 300 - Jardim França, São Paulo - SP',
    lat: -23.480116,
    lng: -46.603444,
    regiao: 'Norte'
  },
  {
    id: 28,
    nome: 'Prime Santana-Urb.SP',
    endereco: 'Rua Dr. César, 500 - Santana, São Paulo - SP',
    lat: -23.5002506,
    lng: -46.6345943,
    regiao: 'Norte'
  },
  {
    id: 29,
    nome: 'Prime Tucuruvi-USP',
    endereco: 'Av. Tucuruvi, 100 - Tucuruvi, São Paulo - SP',
    lat: -23.480116,
    lng: -46.603444,
    regiao: 'Norte'
  },
  {
    id: 30,
    nome: 'Prime V. Guilherme',
    endereco: 'Av. Joaquina Ramalho, 700 - Vila Guilherme, São Paulo - SP',
    lat: -23.5057855,
    lng: -46.6044332,
    regiao: 'Norte'
  },
  {
    id: 31,
    nome: 'Maria P. Maia-ERC.USP',
    endereco: 'Rua Maria Prestes Maia, 350 - Santana, São Paulo - SP',
    lat: -23.5017976,
    lng: -46.6400285,
    regiao: 'Norte'
  },
  {
    id: 32,
    nome: 'Prime Penha-Urb.SP',
    endereco: 'Rua Dr. João Ribeiro, 1500 - Penha, São Paulo - SP',
    lat: -23.521452,
    lng: -46.538631,
    regiao: 'Leste'
  },
  {
    id: 33,
    nome: 'Prime Cap. do Socorro',
    endereco: 'Av. do Rio Bonito, 2500 - Capela do Socorro, São Paulo - SP',
    lat: -23.682160,
    lng: -46.698360,
    regiao: 'Sul'
  },
  {
    id: 34,
    nome: 'Urb Capela do Socorro',
    endereco: 'Rua Nossa Senhora do Bom Conselho, 100 - Capela do Socorro, São Paulo - SP',
    lat: -23.6454052,
    lng: -46.7583896,
    regiao: 'Sul'
  },
  {
    id: 35,
    nome: 'Av. Braz Leme-USP',
    endereco: 'Av. Braz Leme, 1300 - Santana, São Paulo - SP',
    lat: -23.509100,
    lng: -46.644800,
    regiao: 'Norte'
  },
  {
    id: 36,
    nome: 'Urb Penha',
    endereco: 'Rua Betari, 80 - Penha, São Paulo - SP',
    lat: -23.522200,
    lng: -46.531900,
    regiao: 'Leste'
  },
  {
    id: 37,
    nome: 'Urb Santana',
    endereco: 'Rua Alfredo Pujol, 500 - Santana, São Paulo - SP',
    lat: -23.5002506,
    lng: -46.6345943,
    regiao: 'Norte'
  }
];

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

    const perguntarIA = async () => {
    if (!pergunta.trim()) return
    setCarregando(true)
    try {
      const res = await fetch('http://localhost:3001/agencia/analise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pergunta })
      })
      const data = await res.json()
      setRespostaIA(data.resposta || 'Resposta indisponível.')
    } catch (error) {
      setRespostaIA('Erro ao obter resposta da IA.')
    } finally {
      setCarregando(false)
    }
  }

return (
  <div className="w-full p-4 bg-gray-100 flex flex-col items-center gap-4">
    <Panel className="w-full max-w-screen-xl mb-4">
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold text-indigo-600 flex items-center justify-center gap-2">
          Bem-vindo ao <span className="text-indigo-800">Zenix</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          <h3>Explore o mapa abaixo para ver nossas agências por região.</h3>
        </p>
      </div>

      {/* Caixa de Pergunta e Resposta */}
      <div className="w-full flex justify-center mb-6">
        <div className="ia-box">
          <h3>Fale com a Zenix IA</h3>
          <form onSubmit={(e) => { e.preventDefault(); perguntarIA(); }}>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Digite sua pergunta..."
                value={pergunta}
                onChange={(e) => setPergunta(e.target.value)}
              />
              <button type="submit">
                Perguntar
              </button>
            </div>
          </form>
          {carregando && <p className="text-sm text-gray-500 mt-2">Consultando IA...</p>}
          {respostaIA && !carregando && (
            <p className="resposta">{respostaIA}</p>
          )}
        </div>
      </div>

      <div style={{ width: '100%', height: '80vh', backgroundColor: 'black', padding: '1rem' }}>
        <MapContainer center={[-23.55, -46.63]} zoom={12} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {agencias.map((agencia) => (
            <Marker
              key={agencia.id}
              position={[agencia.lat, agencia.lng]}
              eventHandlers={{ click: () => consultarIA(agencia) }}
            />
          ))}
        </MapContainer>
      </div>
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
          <p><i className="pi pi-home mr-2" />Endereço: {dialogInfo.endereco}</p>
          <p className="whitespace-pre-wrap text-sm">{dialogInfo.resposta}</p>
        </div>
      )}
    </Dialog>
  </div>
)
}