import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';

import Signup from './Signup';
import Login from './Login';


import Nav from './Nav';
import Nature from './Nature';
import Cartoon from './Cartoon';
import Flower from './Flower';
import God from './God';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Quote from './Quote';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Nav" element={<Nav />} />
        <Route path="/Nature" element={<Nature />} />
        <Route path="/Cartoon" element={<Cartoon />} />
        <Route path="/Flower" element={<Flower />} />
        <Route path="/God" element={<God />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quote" element={<Quote />} />
        
      </Routes>
    </Router>
  );
};

export default App;
