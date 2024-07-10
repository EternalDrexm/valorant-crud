import React, { useState, useEffect } from 'react';
import '../styles/SearchAgent.css';

const SearchAgent = ({ onAddFavorite }) => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const fetchAgents = async () => {
    try {
      const response = await fetch('https://valorant-api.com/v1/agents?language=es-ES');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAgents(data.data);
    } catch (error) {
      console.error('Failed to fetch agents:', error);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const handleViewAbilities = (agent) => {
    setSelectedAgent(agent);
  };

  const handleCloseModal = () => {
    setSelectedAgent(null);
  };

  const addFavorite = (agent) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = [...storedFavorites, agent];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    alert('Agente añadido a favoritos');
  };

  return (
    <div className="search-agent-container">
      <h2>Agentes</h2>
      <div className="agents-list">
        {agents.map((agent) => (
          <div key={agent.uuid} className="agent-card">
            <img src={agent.displayIcon} alt={agent.displayName} />
            <h3>{agent.displayName}</h3>
            <div className="agent-actions">
              <button onClick={() => addFavorite(agent)}>Añadir a Favoritos</button>
              <button onClick={() => handleViewAbilities(agent)}>Ver Habilidades</button>
            </div>
          </div>
        ))}
      </div>
      {selectedAgent && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Habilidades de {selectedAgent.displayName}</h3>
            <ul>
              {selectedAgent.abilities.map((ability) => (
                <li key={ability.slot}>
                  <strong>{ability.displayName}</strong>: {ability.description}
                </li>
              ))}
            </ul>
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAgent;
