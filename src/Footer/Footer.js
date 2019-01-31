import React from 'react';

import './Footer.css';
import Icons from './Icons';
import Contributor from './Contributor';

const Footer = () => (
  <div className="Footer">
    <h2>React Conf Armenia</h2>
    <ul className="icons">
      {Icons.map(icon => (
        <li key={icon.key} className="icon">
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
        <Contributor name="davidtiger" />
        , coded in React.js by
        <Contributor name="modularcoder" />
        ,
        <Contributor name="nairihar" />
        and
        <Contributor
          name="others"
          url="https://github.com/JSConfArmenia/conf-19-react/graphs/contributors"
        />
        .
      </p>
    </div>
  </div>
);

export default Footer;
