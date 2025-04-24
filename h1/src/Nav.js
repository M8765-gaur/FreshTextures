import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'; 

const Nav = () => {
  const navigate = useNavigate();

  const Home =() => {
    navigate('/Home');
  }

  const About = () => {
    navigate('/About');
  };

  const Blog = () => {
    navigate('/Blog');
  };

  const Contact = () => {
    navigate('/Contact');
  };

  return (
    <div className="nav-container">
      <h1>Welcome to Fresh Textures</h1>
      <div className="nav-buttons">
        <button onClick={Home}>Home</button>
        <button onClick={Blog}>Categories</button>
        <button onClick={About}>About</button>
        <button onClick={Contact}>Contact Us</button>
      </div>
    </div>
  );
};

export default Nav;
