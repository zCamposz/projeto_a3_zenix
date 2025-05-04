// src/components/AgenciasPorRegiao.jsx
import React from "react";
import { useParams } from "react-router-dom";
import agencias from "../data/agencias"; // Importa as agências

function AgenciasPorRegiao() {
  const { regiao } = useParams(); // Pega a região pela URL

  // Filtra as agências pela região
  const agenciasDaRegiao = agencias.filter(agencia => agencia.regiao.toLowerCase() === regiao.toLowerCase());

  return (
    <div>
      <h2>Agências da Região {regiao}</h2>
      <ul>
        {agenciasDaRegiao.map((agencia) => (
          <li key={agencia.id}>
            <strong>{agencia.nome}</strong>
            <br />
            Horário: {agencia.horario}
            <br />
            Espera: {agencia.espera}
            <br />
            <a href={`/agencia/${agencia.id}`}>Ver detalhes</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgenciasPorRegiao;
