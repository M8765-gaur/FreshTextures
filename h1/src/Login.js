import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert(`Login successful as ${email}`);
        navigate('/Nav');
      } else {
        alert('Invalid details. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Check your details or try again later.');
    }
  };

  return (
    <div className="login-container1">
      <h2 className="login-title1">Login</h2>

      <div className="login-form1">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input1"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input1"
          required
        />
        <button className="login-button1" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
