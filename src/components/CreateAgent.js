import React, { useState } from 'react';
import '../styles/CreateAgent.css';

const CreateAgent = ({ onCreateAgent }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAgent = { name, role, image }; // Asegúrate de que `image` se esté configurando correctamente
    onCreateAgent(newAgent);
    alert('Agente creado exitosamente');
  };

  return (
    <div className="create-agent-container">
      <h2>Crear Agente</h2>
      <form className="create-agent-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="role">Selecciona un tipo</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
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
          type="url"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateAgent;
    