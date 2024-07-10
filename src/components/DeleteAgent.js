import React, { useState } from 'react';
import '../styles/DeleteAgent.css';

const DeleteAgent = ({ agents, setAgents }) => {
  const [selectedAgentId, setSelectedAgentId] = useState('');

  const handleDelete = () => {
    const updatedAgents = agents.filter((agent) => agent.id !== parseInt(selectedAgentId));
    setAgents(updatedAgents);
    setSelectedAgentId('');
    alert('Agente eliminado exitosamente');
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Agente</h2>
      <div className="agent-selector">
        <label htmlFor="agent-select">Selecciona un agente:</label>
        <select
          id="agent-select"
          value={selectedAgentId}
          onChange={(e) => setSelectedAgentId(e.target.value)}
        >
          <option value="">Selecciona un agente</option>
          {agents.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
      </div>
      {selectedAgentId && (
        <button onClick={handleDelete} className="delete-button">Eliminar</button>
      )}
    </div>
  );
};

export default DeleteAgent;
