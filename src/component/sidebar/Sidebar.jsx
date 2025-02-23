import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h2>Contents</h2>
          <ul>
            <li><a href="#top">Top</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
        <div className="nav-section">
          <h2>Settings</h2>
          <ul>
            <li><a href="#appearance">Appearance</a></li>
            <li><a href="#language">Language</a></li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;