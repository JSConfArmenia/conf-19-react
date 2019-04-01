import React from 'react';

import './Footer.scss';
import Icons from './_Icons/Icons';
import Contributor from './Contributor';
import { Title } from '../_components';

const Footer = () => (
  <section className="Footer">
    <Title className="Title">React Conf Armenia</Title>
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
      <a className="Link" href="/ReactConfAM19_PR_EN.pdf">
        EN
      </a>
      /
      <a className="Link" href="/ReactConfAM19_PR_ARM.pdf">
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
