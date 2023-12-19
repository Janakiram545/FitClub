import React, { useState } from 'react';
import Home from '../../assets/home.jpg';
import { useNavigate } from 'react-router-dom';
import './Homepic.css';

const Homepic = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // Toggle the state when the button is clicked
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
    navigate('/login');
  };

  return (
    <div className='homepi'>
      <img
        src={Home}
        alt=""
        style={{ width: '100%', maxWidth: '100%', height: '100%' }}
      />

      <div className='homepitext'>
        <h2>GYM MANAGEMENT SYSTEM</h2>
        <p>
          Gym Management System is an easy-to-use and health club membership
          management system. It helps you to keep records of your members and
          their memberships, and allows easy communication between you and your
          members. Gym Master is also a feature-packed, helping you in the
          management and growth of the fitness club. This software is easy to
          use for the gym and health club. This has a membership management
          system which helps to keep records of members and their membership
          details.
        </p>

        {/* Add the rest of your content here */}

        <div className='right-h'>
          <button className='btn' onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepic;
