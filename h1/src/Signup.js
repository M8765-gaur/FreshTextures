
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', formData);

      if (response.status === 201) {
        alert(`Account created for ${response.data.name}`);
        navigate('/Nav');
      } else {
        alert(`Signup failed: ${response.data.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error during signup:', error.response || error);
      const msg = error.response?.data?.message || 'Internal error occurred.';
      alert(`Signup error: ${msg}`);
    }
  };

  return (
    <div className="login-container1">
      <h2 className="login-title1">Sign Up</h2>
      <form className="login-form1" onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="login-input1"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="login-input1"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          className="login-input1"
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="login-input1"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="login-input1"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit" className="login-button1">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
