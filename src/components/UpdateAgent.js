import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/UpdateAgent.css';

const UpdateAgent = ({ onUpdateAgent }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [agent, setAgent] = useState(location.state ? location.state.agent : {
    id: '',
    name: '',
    role: '',
    image: '',
  });

  useEffect(() => {
    if (location.state && location.state.agent) {
      setAgent(location.state.agent);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgent({
      ...agent,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAgent(agent);
    navigate('/read-agents');
  };

  return (
    <div className="update-container">
      <h2>Actualizar Agente</h2>
      <form onSubmit={handleSubmit} className="update-form">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={agent.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="role">Tipo</label>
        <select
          id="role"
          name="role"
          value={agent.role}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un tipo</option>
          <option value="Duelist">Duelista</option>
          <option value="Initiator">Iniciador</option>
          <option value="Sentinel">Centinela</option>
          <option value="Controller">Controlador</option>
        </select>
        <label htmlFor="image">URL de la Imagen</label>
        <input
          type="text"
          id="image"
          name="image"
          value={agent.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default UpdateAgent;
