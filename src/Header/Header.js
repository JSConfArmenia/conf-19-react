import React, { Component } from 'react';
import { Button } from '_components';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.scrollPos = window.scrollY;

    this.state = {
      isSmall: window.innerWidth <= 600,
      isOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateDimensions());

    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    const { isSmall } = this.state;
    if (window.innerWidth <= 600 && !isSmall) {
      this.setState({
        isSmall: true,
      });
    } else if (window.innerWidth >= 600 && isSmall) {
      this.setState({
        isSmall: false,
      });
    }
  }

  toggle(e) {
    e.preventDefault();
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  close() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isSmall, isOpen } = this.state;
    let headerClasses = isSmall ? ' -small' : '';
    headerClasses = isOpen ? ' -open' : '';

    return (
      <header className={`Header${headerClasses}`}>
        <div className="container">
          <div className="Logo">
            <img
              className="LogoImg"
              src="/logo.png"
              alt="React Conference 2019 Logo"
            />
          </div>
          <nav className="Navigation">
            <a className="Link" href="#About" onClick={() => this.close()}>About</a>
            <a className="Link" href="#Schedule" onClick={() => this.close()}>Schedule</a>
            <a className="Link" href="#Speakers" onClick={() => this.close()}>Speakers</a>
            <a className="Link" href="#Sponsors" onClick={() => this.close()}>Sponsors</a>
            <a className="Link" href="#Team" onClick={() => this.close()}>Team</a>
            <a className="Link" href="#Location" onClick={() => this.close()}>Location</a>
            <a className="Link" href="#FAQ" onClick={() => this.close()}>FAQ</a>
            <a className="Link" href="#Quiz" onClick={() => this.close()}>Quiz</a>
            <Button link className="ActionButton">Request an Invite</Button>
          </nav>
        </div>
        <a href="#Intro" className="NavBtn" onClick={e => this.toggle(e)}>
          Nav
        </a>
      </header>
    );
  }
}

export default Header;
