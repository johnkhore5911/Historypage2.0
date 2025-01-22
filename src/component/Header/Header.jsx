import React from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using react-router-dom for navigation
import './Header.css';
import logo from '/src/assets/logo/history.webp';

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = () => {
    navigate('/login'); // Replace '/login' with your login page route
  };

  return (
    <div className="headerr">
      <div className="heading">History Page</div>
      {/* <img src={logo} alt="Background" className="header-image" /> */}
      
      {/* Button for Login */}
      <button className="login-button" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default Header;

