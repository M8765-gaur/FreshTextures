import React from 'react';
import A1 from './images/g1.jpg';
import A2 from './images/g2.jpg';
import A3 from './images/g3.jpg';
import A4 from './images/g4.jpg';
import A5 from './images/g5.jpg';
import A6 from './images/g6.jpg';
import A7 from './images/g7.jpg';
import A8 from './images/g8.jpg';
import A9 from './images/g9.jpg';
import A10 from './images/g10.jpg';
import A11 from './images/g11.jpg';
import A12 from './images/g12.jpg';
import A13 from './images/g13.jpg';
import A14 from './images/g14.jpg';
import A15 from './images/g15.jpg';

import './Nature.css';

//  Ye ek async function hai jo jab Download button pe click hota hai, us time run hota hai.
const handleDownload = async (imageSrc, filename) => {
  try {
    //Ye line browser se image download karne ke liye fetch() ka use karti hai
    const response = await fetch(imageSrc, { mode: 'cors' }); // CORS-enabled request

    //Response ko binary data (blob format) me convert kar rahe ho, jisse download kar sake
    const blob = await response.blob();

    //Blob ko ek temporary URL banate ho jise <a> tag ke href me use karoge.
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    window.URL.revokeObjectURL(url); // memory clean

    
    alert('Download successful!');
  } catch (err) {
    console.error('Download failed:', err);
    alert('Download failed. This image might be restricted by CORS policy.');
  }
};

const images = [
  { src: A1, name: 'g1.jpg' },
  { src: A2, name: 'g2.jpg' },
  { src: A3, name: 'g3.jpg' },
  { src: A4, name: 'g4.jpg' },
  { src: A5, name: 'g5.jpg' },
  { src: A6, name: 'g6.jpg' },
  { src: A7, name: 'g7.jpg' },
  { src: A8, name: 'g8.jpg' },
  { src: A9, name: 'g9.jpg' },
  { src: A10, name: 'g10.jpg' },
  { src: A11, name: 'g11.jpg' },
  { src: A12, name: 'g12.jpg' },
  { src: A13, name: 'g13.jpg' },
  { src: A14, name: 'g14.jpg' },
  { src: A15, name: 'g15.jpg' },
];

export default function Nature() {
  return (
      <div className='container-fluid t2'>
        <h1 className='hc1' align="center">Nature</h1>
        
        <center>
          <div className='row r1'>
          <h1 className='hc2'>God Wallpaper</h1>
            {images.map((img, index) => (
              <div className='col-md-3 r2' key={index}>
                <img src={img.src} alt={`Wallpaper ${index + 1}`} />
                <br />
                <button
                  className="download-btn"
                  onClick={() => handleDownload(img.src, img.name)}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </center>
      </div>
  );
}
