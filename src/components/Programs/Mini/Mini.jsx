import React from 'react';

const ImageTextDisplay = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Left side - Image */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <img
          src="/Strength.jpg"  // Replace with the actual path to your image
          alt="Mini"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p style={{ textAlign: 'center' }}>"In our Strength Training program, you embark on a transformative journey to enhance your physical prowess. Through a variety of exercises, we guide you to build muscle, boost endurance, and unlock your full strength potential. Join now and experience the empowering impact of strength-focused training on your fitness journey."
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
