import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import A1 from './images/FT.png';

const Welcome = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    console.log('Explore Wallpapers');
    
    navigate('/Home'); 
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Fresh Textures!</h1>
      <p className="welcome-subtitle">Find the perfect wallpaper for your device.</p>

      <div className="welcome-image-wrapper">
        <img src={A1} width={200} height={400} alt="Wallpaper preview" className="welcome-image" />
      </div>

      <button className="explore-button" onClick={handleExploreClick}>
        Explore Wallpapers
      </button>
    </div>
  );
};

export default Welcome;
