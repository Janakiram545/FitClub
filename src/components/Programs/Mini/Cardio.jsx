import React from 'react';
import './Cardio.css';

const ImageTextDisplay = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Left side - Image */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <img
          src="/Cardio.jpg"  // Replace with the actual path to your image
          alt="Cardio"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p style={{ textAlign: 'center' }}>
"Get ready to elevate your heart rate and invigorate your body with our Cardio Training program. Designed for those seeking dynamic and engaging workouts, our sequential moves will keep you moving for 20 to 30 minutes. Join now to embrace the cardio challenge and embark on a path to improved cardiovascular health."
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
