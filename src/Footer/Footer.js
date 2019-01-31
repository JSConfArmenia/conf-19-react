import React from 'react';

import './Footer.css';
import Icons from './Icons';

const Footer = () => (
  <div className="Footer">
    <h2>React Conf Armenia</h2>
    <ul className="icons">
      {Icons.map(icon => (
        <li className="icon">
          <a href={icon.url}>{icon.component}</a>
        </li>
      ))}
    </ul>
    <div className="lang">
      <p>Press release</p>
      <a className="link" href="/">
        EN
      </a>
      /
      <a className="link" href="/">
        AM
      </a>
    </div>
    <div className="copyright">
      <p>
        Design and branding by
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/davidtiger"
        >
          @davidtiger
        </a>
        , coded in React.js by
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/modularcoder"
        >
          @modularcoder
        </a>
        ,
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/nairihar"
        >
          @nairihar
        </a>
        and
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/JSConfArmenia/conf-19-react/graphs/contributors"
        >
          others
        </a>
        .
      </p>
    </div>
  </div>
);

export default Footer;
