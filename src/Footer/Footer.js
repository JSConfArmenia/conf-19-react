import React from 'react';

import './Footer.scss';
import Icons from './_Icons/Icons';
import Contributor from './Contributor';

const Footer = () => (
  <section className="Footer">
    <h2 className="Title">React Conf Armenia</h2>
    <ul className="Icons">
      {Icons.map(icon => (
        <li key={icon.key} className="Icon">
          <a rel="noopener noreferrer" target="_blank" href={icon.url}>
            {icon.component}
          </a>
        </li>
      ))}
    </ul>
    <div className="PressRelease">
      <p>Press release</p>
      <a className="Link" href="/">
        EN
      </a>
      /
      <a className="Link" href="/">
        AM
      </a>
    </div>
    <div className="Copyright">
      <p>
        Design and branding by
        <Contributor
          name="davidtiger"
          url="https://www.behance.net/Davidtiger"
        />
        , coded in React.js by our
        <Contributor
          name="awesome contributors"
          url="https://github.com/JSConfArmenia/conf-19-react/graphs/contributors"
        />
        .
      </p>
    </div>
  </section>
);

export default Footer;
