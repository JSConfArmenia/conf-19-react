import React from 'react';
import { Button } from '_components';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Header.scss';

const Header = () => (
  <header className="Header">
    <div className="container">
      <div className="Logo">
        <img
          className="LogoImg"
          src="/logo.png"
          alt="React Conference 2019 Logo"
        />
      </div>
      <nav className="Navigation">
        <a className="Link" href="#About">About</a>
        <a className="Link" href="#Schedule">Schedule</a>
        <a className="Link" href="#Speakers">Speakers</a>
        <a className="Link" href="#Sponsors">Sponsors</a>
        <a className="Link" href="#Team">Team</a>
        <a className="Link" href="#Location">Location</a>
        <a className="Link" href="#FAQ">FAQ</a>
        <a className="Link" href="#Quiz">Quiz</a>
      </nav>
      <Button link className="ActionButton">Request an Invite</Button>
    </div>
  </header>
);

export default Header;
