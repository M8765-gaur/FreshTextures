import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const navigate = useNavigate();

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Contact form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message: ' + data.message);
      }
    } catch (err) {
      alert('Something went wrong!');
      console.error(err);
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="contact-page-container">

      {/* Top Left Logout Button */}
      <button onClick={handleLogout} className="logout-button">Logout</button>

      {/* Contact Form */}
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <select
            name="subject"
            placeholder="subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-input"
            required
          >
            <option value="Subject">Subject </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Feedback">Feedback</option>
            <option value="Report a Bug">Report a Bug</option>
            <option value="Wallpaper Request">Wallpaper Request</option>
            <option value="Login/Signup Issue">Login/Signup Issue</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
