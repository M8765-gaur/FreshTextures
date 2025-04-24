import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css'; // Assuming you will create a separate CSS for the blog styling

const Blog = () => {
  const navigate = useNavigate();

  // Functions to navigate to specific pages based on the category
  const Flower = () => {
    navigate('/Flower');
  };

  const Cartoon = () => {
    navigate('/Cartoon');
  };

  const God = () => {
    navigate('/God');
  };

  const Nature = () => {
    navigate('/Nature');
  };

  const Quote = () => {
    navigate('/Quote');
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Categories of Wallpapers</h1>
      <p className="blog-description">Abstract, nature ya ho retro vibe,<br></br>
      Wallpaper mein dhoondo apni life ki tribe!</p>

      <div className="blog-category-container">
        {/* Flower Wallpaper */}
        <button className="blog-category-card" onClick={Nature}>Nature</button>
        <button className="blog-category-card" onClick={Cartoon}>Cartoon</button> 
        <button className="blog-category-card" onClick={Flower}>Flower</button>
        <button className="blog-category-card" onClick={God}>God</button>
        <button className="blog-category-card" onClick={Quote}>Quote</button>
        
      </div>
    </div>
  );
};

export default Blog;
