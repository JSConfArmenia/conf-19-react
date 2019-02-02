import React from 'react';
import { Button } from '_components';
import './Header.css';

const Header = () => (
  <header className="Header">
    <img className="Logo" src="/logo.png" alt="React Conference 2019 Logo" height="" />
    <nav className="Navigation">
      <a href="#About">About</a>
      <a href="#Schedule">Schedule</a>
      <a href="#Speakers">Speakers</a>
      <a href="#Sponsors">Sponsors</a>
      <a href="#Team">Team</a>
      <a href="#Location">Location</a>
      <a href="#FAQ">FAQ</a>
      <a href="#Quiz">Quiz</a>
    </nav>
    <Button link>Request an Invite</Button>
  </header>
);

export default Header;
