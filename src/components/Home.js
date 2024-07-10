import React, { useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    };

    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player('background-video', {
        videoId: '1o-DMei4BEU', // ID del video de YouTube
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 0,
          loop: 1,
          playlist: '1o-DMei4BEU', // ID del video de YouTube
          modestbranding: 1,
          showinfo: 0,
          rel: 0
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          }
        }
      });
    };

    if (!window.YT) {
      loadYouTubeAPI();
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    return () => {
      const playerElement = document.getElementById('background-video');
      if (playerElement) {
        playerElement.remove();
      }
    };
  }, []);

  return (
    <div className="home-container">
      <div id="background-video"></div>
      <div className="home-content">
        <h1>Bienvenido a Valorant CRUD</h1>
        <p>Administra tus agentes de Valorant de manera sencilla y eficiente.</p>
        <div className="home-buttons">
          <button onClick={() => window.location.href='/create-agent'}>Crear Agente</button>
          <button onClick={() => window.location.href='/read-agents'}>Leer Agentes</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
