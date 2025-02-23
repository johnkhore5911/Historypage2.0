
import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
