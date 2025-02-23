
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="logo-container">
         <img src="/lo" alt="" />
          <h1>History Page</h1>
        </div>
      </div>
      
      <div className="header-right">
        <div className="search-container">
          <input type="search" placeholder="Search History Page" className="search-input" />
        </div>
        <button onClick={() => navigate('/login')} className="login-button">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;