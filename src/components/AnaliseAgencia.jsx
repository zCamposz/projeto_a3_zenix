// src/components/AnaliseAgencia.jsx
import { useState } from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { ProgressSpinner } from 'primereact/progressspinner'
import { InputText } from 'primereact/inputtext'

export default function AnaliseAgencia() {
  const [resposta, setResposta] = useState('')
  const [carregando, setCarregando] = useState(false)

  const agencia = {
    nome: 'Agência Central',
    endereco: 'Rua das Flores, 123',
    status: true,
    horario: '09:00 às 17:00',
    manutencao: false
  }

  const handleAnalise = async () => {
    setCarregando(true)
    setResposta('')
    try {
      const res = await fetch('http://localhost:3001/agencia/analise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(agencia)
      })
      const data = await res.json()
      setResposta(data.resposta)
    } catch (error) {
      setResposta('Erro ao conectar com o servidor.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="p-4">
      <Button label="Analisar Agência" icon="pi pi-comment" onClick={handleAnalise} />
      {carregando && <ProgressSpinner style={{ width: '30px', height: '30px' }} />}
      {resposta && (
        <Card title="Resposta da IA" className="mt-4">
          <p>{resposta}</p>
        </Card>
      )}
    </div>
  )
}
