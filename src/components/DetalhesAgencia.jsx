import { useParams } from "react-router-dom";
import agencias from "../data/agencias";

function DetalhesAgencia() {
  const { id } = useParams();
  const agencia = agencias.find((a) => a.id === parseInt(id));

  if (!agencia) {
    return <div>Agência não encontrada.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{agencia.nome}</h2>
      <p>Região: {agencia.regiao}</p>
      <p>Horário: {agencia.horario}</p>
      <p>Caixas eletrônicos: {agencia.caixas}</p>
      <p>Tempo de espera: {agencia.espera}</p>
    </div>
  );
}

export default DetalhesAgencia;

