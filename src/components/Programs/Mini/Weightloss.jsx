import React from 'react';
import {Link} from 'react-router-dom';

const ImageTextDisplay = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Left side - Image */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        
      <h2>Choose a Plan</h2>
        <img
          src="/Weightloss.jpg"  // Replace with the actual path to your image
          alt="Weightloss"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p style={{ textAlign: 'center' }}>Say goodbye to unwanted fat and welcome a leaner, healthier you with our Fat Burning program. Tailored for weight loss, this program combines effective workouts and targeted exercises to help you shed pounds and sculpt your body. Join now to ignite the fat-burning process and achieve your weight loss goals."
</p>
      </div>

      {/* Right side - Text */}
      <div style={{ flex: 1, marginLeft: '10px' }}>
        {/* <p style={{ textAlign: 'center' }}>ftyguhi</p> */}
        {/* Add your text content here */}
        {/* <p>Your text content goes here...</p> */}
      </div>
    </div>
  
  );
};

export default ImageTextDisplay;
