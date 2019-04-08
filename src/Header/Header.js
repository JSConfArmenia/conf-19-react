import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Button } from '_components';
import FontAwesome from 'react-fontawesome';
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
      isSticked: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateDimensions());

    window.addEventListener('scroll', () => {
      this.setState({
        isSticked: window.scrollY > 20,
      });
    });

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
    const { isSmall, isOpen, isSticked } = this.state;
    let headerClasses = isSmall ? ' -small' : '';
    headerClasses = isOpen ? ' -open' : '';

    if (isSticked) {
      headerClasses += ' -is-sticked';
    }

    return (
      <header className={`Header${headerClasses}`}>
        <div className="container">
          <div className="Logo">
            <img
              className="LogoImg"
              src="/logo.png"
              alt="React Conference 2019 Logo"
            />
            <Link
             to="Intro"
             smooth="true"
             spy={true}
             offset={-100}
             className="Link"
             onClick={() => this.close()}
            >
          </div>

          <Button
            link
            size="small"
            className="ActionButton MobileActionButton"
            href="http://bit.ly/joinReactConfAM"
          >
            Request an Invite
          </Button>

          <nav className="Navigation">
            <Link
              to="About"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              About
            </Link>
            {/* <Link to="Schedule" smooth="true" spy={true} className="Link" onClick={()
             => this.close()}>Schedule</Link> */}
            <Link
              to="Speakers"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              Speakers
            </Link>
            <Link
              to="Sponsors"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              Sponsors
            </Link>
            <Link
              to="Team"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              Team
            </Link>
            <Link
              to="Location"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              Location
            </Link>
            <Link
              to="Jobs"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              Jobs
            </Link>
            <Link
              to="FAQ"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              FAQ
            </Link>
            {/* <Link to="Quiz" smooth="true" spy={true} className="Link" onClick={()
             => this.close()}>Quiz</Link> */}
            <Button
              link
              size="small"
              className="ActionButton DesktopActionButton"
              href="http://bit.ly/joinReactConfAM"
            >
              Request an Invite
            </Button>
          </nav>
          <a href="#Intro" className="NavBtn" onClick={e => this.toggle(e)}>
            <FontAwesome name="bars" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
