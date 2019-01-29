import React from 'react';

import './Header.css';

const Header = () => (
  <header className="Header">
    <img src="/logo.png" alt="React Conference 2019 Logo" height=""></img>
    <nav>      
      <a href="#About">About</a>
      <a href="#Schedule">Schedule</a>
      <a href="#Speakers">Speakers</a>
      <a href="#Sponsors">Sponsors</a>
      <a href="#Team">Team</a>
      <a href="#Location">Location</a>
      <a href="#FAQ">FAQ</a>
      <a href="#Quiz">Quiz</a>
      <button id="req-invite">Request an invite</button>      
    </nav>
  </header>
);

export default Header;
