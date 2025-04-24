import React from 'react';
import A1 from './images/f1.jpg';
import A2 from './images/f2.jpg';
import A3 from './images/f3.jpg';
import A4 from './images/f4.jpg';
import A5 from './images/f5.jpg';
import A6 from './images/f6.jpg';
import A7 from './images/f7.jpg';
import A8 from './images/f8.jpg';
import A9 from './images/f9.jpg';
import A10 from './images/f10.jpg';
import A11 from './images/f11.jpg';
import A12 from './images/f12.jpg';
import A13 from './images/f13.jpg';
import A14 from './images/f14.jpg';
import A15 from './images/f15.jpg';

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
  { src: A1, name: 'f1.jpg' },
  { src: A2, name: 'f2.jpg' },
  { src: A3, name: 'f3.jpg' },
  { src: A4, name: 'f4.jpg' },
  { src: A5, name: 'f5.jpg' },
  { src: A6, name: 'f6.jpg' },
  { src: A7, name: 'f7.jpg' },
  { src: A8, name: 'f8.jpg' },
  { src: A9, name: 'f9.jpg' },
  { src: A10, name: 'f10.jpg' },
  { src: A11, name: 'f11.jpg' },
  { src: A12, name: 'f12.jpg' },
  { src: A13, name: 'f13.jpg' },
  { src: A14, name: 'f14.jpg' },
  { src: A15, name: 'f15.jpg' },
];

export default function Nature() {
  return (
    <div>
      <div className='container-fluid t2'>
        <h1 className='hc1' align="center">Nature</h1>
        
        <center>
          <div className='row r1'>
          <h1 className='hc2'>Flower Wallpaper</h1>
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
    </div>
  );
}
