import React, { useState, useEffect } from 'react';
import '../styles/Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (agent) => {
    const updatedFavorites = favorites.filter(fav => fav.uuid !== agent.uuid);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h2>Agentes Favoritos</h2>
      <div className="favorites-list">
        {favorites.map(agent => (
          <div key={agent.uuid} className="favorite-card">
            <img src={agent.displayIcon} alt={agent.displayName} />
            <h3>{agent.displayName}</h3>
            <button onClick={() => removeFavorite(agent)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
