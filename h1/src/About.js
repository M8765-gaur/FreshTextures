import React from 'react';
import A2 from './images/pic1.jpg'
import A1 from './images/Piic2.jpeg'

import './About.css';

const About = () => {
  return (
    
    <div className="about-container"><br></br><br></br><br></br>
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
      Our mission is simple — to fill your screens with beauty, positivity, and a little bit of magic every day."
      </p>

      <div className="team-container">
        {/* Member 1 */}
        <div className="team-member">
          <div className="member-card">
            <img src={A1} alt="Member 1" className="member-img1"/>
            <div className="member-info">
              <h3 className="member-name">Vanshika Rawat</h3>
              <p className="member-role">Co-Founder & Designer</p>
              <p className="member-bio">
                Vanshika is an experienced designer who brings creative ideas to life. She carefully selects every wallpaper to ensure top-quality designs for users.
              </p>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="team-member">
          <div className="member-card">
            <img src={A2} alt="Member 2" className="member-img" />
            <div className="member-info">
              <h3 className="member-name">Monika Gaur</h3>
              <p className="member-role">Co-Founder & Developer</p>
              <p className="member-bio">
                Monika is the technical mind behind the website. With her coding expertise, she ensures a smooth user experience and manages the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
