import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ReadAgents.css';

const ReadAgents = ({ agents, onUpdateAgent, onDeleteAgent }) => {
  const navigate = useNavigate();

  const handleUpdate = (agent) => {
    // Aquí redirigimos a una ruta específica para actualizar, asegurándonos de que la función de actualización se maneje adecuadamente.
    navigate(`/update-agent/${agent.id}`, { state: { agent } });
  };

  const handleDelete = (id) => {
    // Llamamos la función de eliminación pasada por props
    onDeleteAgent(id);
  };

  return (
    <div className="read-agents-container">
      <h2>Agentes Creados</h2>
      <div className="agents-list">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <img src={agent.image} alt={agent.name} className="agent-image" />
            <h3>{agent.name}</h3>
            <p>{agent.role}</p>
            <div className="agent-actions">
              <button onClick={() => handleUpdate(agent)} className="btn-update">Actualizar</button>
              <button onClick={() => handleDelete(agent.id)} className="btn-delete">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadAgents;
