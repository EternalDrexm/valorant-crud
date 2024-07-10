import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateAgent from './components/CreateAgent';
import ReadAgents from './components/ReadAgents';
import SearchAgent from './components/SearchAgent';
import Favorites from './components/Favorites';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UpdateAgent from './components/UpdateAgent';
import './App.css';

const App = () => {
  const [agents, setAgents] = useState([]);
  const [favoriteAgents, setFavoriteAgents] = useState([]);

  useEffect(() => {
    const storedAgents = JSON.parse(localStorage.getItem('agents'));
    if (storedAgents) {
      setAgents(storedAgents);
    }
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteAgents'));
    if (storedFavorites) {
      setFavoriteAgents(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('agents', JSON.stringify(agents));
  }, [agents]);

  useEffect(() => {
    localStorage.setItem('favoriteAgents', JSON.stringify(favoriteAgents));
  }, [favoriteAgents]);

  const handleCreateAgent = (agent) => {
    setAgents([...agents, { ...agent, id: agents.length + 1 }]);
  };

  const handleUpdateAgent = (updatedAgent) => {
    setAgents(agents.map((agent) => (agent.id === updatedAgent.id ? updatedAgent : agent)));
  };

  const handleDeleteAgent = (id) => {
    setAgents(agents.filter(agent => agent.id !== id));
  };

  const handleAddFavorite = (agent) => {
    if (!favoriteAgents.some(fav => fav.id === agent.id)) {
      setFavoriteAgents([...favoriteAgents, agent]);
    }
  };

  const handleRemoveFavorite = (uuid) => {
    setFavoriteAgents(favoriteAgents.filter(agent => agent.uuid !== uuid));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-agent" element={<CreateAgent onCreateAgent={handleCreateAgent} />} />
        <Route path="/read-agents" element={<ReadAgents agents={agents} onUpdateAgent={handleUpdateAgent} onDeleteAgent={handleDeleteAgent} />} />
        <Route path="/update-agent/:id" element={<UpdateAgent onUpdateAgent={handleUpdateAgent} />} />
        <Route path="/search-agent" element={<SearchAgent onAddFavorite={handleAddFavorite} />} />
        <Route path="/favorites" element={<Favorites favoriteAgents={favoriteAgents} onRemoveFavorite={handleRemoveFavorite} />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
