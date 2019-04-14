import React from 'react';

import Title, { TitleAccent } from '../_components/Title';
import Description from '../_components/Description';

import './About.scss';

const About = () => (
  <section id="about" className="About">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="SectionBox">
            <Title>
              What is
              {' '}
              <TitleAccent color="primary1">
                React Conf
              </TitleAccent>
            </Title>
            <Description>
              React Conf is an all-React conference,
              gathering front-end and full-stack
              developers in one place to share
              knowledge, skills, to network, and
              just to have fun.
              <br />
              <br />
              <a
                className="CodeOfConductLink"
                href="https://github.com/JSConfArmenia/conf-19-react/blob/master/CODE_OF_CONDUCT.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span role="img" aria-label="code of conduct">❕</span>
                {' '}
                code of conduct
              </a>
            </Description>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="IllustrationContainer">
            <img
              className="Illustration"
              src="./about-conf-image.png"
              alt="About React Conf Armenia"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
