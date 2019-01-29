import React from 'react';

import './Header.css';

const Header = () => (
  <header className="Header">
    <img src="/logo.png" alt="React Conference 2019 Logo" height=""></img>
    <nav>      
      <a href="#About">About</a>
      <a href="#">Schedule</a>
      <a href="#Speakers">Speakers</a>
      <a href="#Sponsors">Sponsors</a>
      <a href="#">Team</a>
      <a href="#">Location</a>
      <a href="#">FAQ</a>
      <a href="#">Quiz</a>
      <a href="#" id="req-invite">Request an invite</a>      
    </nav>
  </header>
);

export default Header;
