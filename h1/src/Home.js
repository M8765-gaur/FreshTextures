import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 


const Home = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate('/Login');
  };

  const Signup = () => {
    navigate('/Signup');
  };

  

  return (
    <div className="auth-container">
      <h1>Welcome to Fresh Textures</h1>
      <div className="auth-buttons">
        <button onClick={Login}>Login</button>
        <button onClick={Signup}>Signup</button>
        
      </div>
    </div>
  );
};

export default Home;
