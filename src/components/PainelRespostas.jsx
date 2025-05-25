import { Panel } from 'primereact/panel'

export default function PainelRespostas({ respostas }) {
  const hasRespostas = Object.keys(respostas).length > 0

  return (
    <div className="w-full max-h-[500px] overflow-y-auto bg-white p-3 rounded shadow">
      <Panel header="Respostas da IA" toggleable collapsed={!hasRespostas} className="mb-4">
        {!hasRespostas ? (
          <p>Nenhuma agência consultada ainda.</p>
        ) : (
          Object.entries(respostas).map(([id, texto]) => (
            <div key={id} className="mb-3 border-b pb-2">
              <strong>Agência {id}</strong>
              <p className="text-sm leading-snug mt-1 whitespace-pre-wrap">{texto}</p>
            </div>
          ))
        )}
      </Panel>
    </div>
  )
}
