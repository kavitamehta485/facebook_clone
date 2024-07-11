import React from 'react';
import './Navbar.css';
import logo from './images/facebook-logo.png'
import profile from "./images/profile.jpg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </a>
        <div className="search"><i className="ri-search-line"></i></div>
        <div className="inpu">
          <i style={{ cursor: 'pointer' }} className="ri-search-line"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="between">
        <div className="pages home"><i className="ri-home-5-fill"></i></div>
        <div className="pages"><i className="ri-group-fill"></i></div>
        <div className="pages"><i className="ri-tv-2-line"></i></div>
        <div className="pages"><i className="ri-group-2-fill"></i></div>
        <div className="pages"><i className="ri-gamepad-line"></i></div>
      </div>
      <div className="right">
        <div className="icon"><i className="ri-menu-line"></i></div>
        <div className="icon"><i className="fa-brands fa-facebook-messenger"></i></div>
        <div className="icon"><i className="ri-notification-2-fill"></i></div>
        <div className="plus"><i className="ri-add-line"></i></div>
        <a href="https://www.facebook.com/profile.php?id=61551117972893" target="_blank" rel="noopener noreferrer">
          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
