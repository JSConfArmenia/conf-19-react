import React from 'react';

import Title, { TitleAccent } from '../_components/Title';
import './About.css';

const About = () => (
  <div id="About" className="About">
    <div className="info-container">
      <Title>
        What is
        {' '}
        <TitleAccent color="primary1">
          React Conf
        </TitleAccent>
      </Title>
      <p>
        React Conf is an all-React conference,
        gathering front-end and full-stack
        developers in one place to share
        knowledge, skills, to network, and
        just to have fun.
      </p>
    </div>
    <div className="image-container">
      <img className="triangle icon" src="./about-section-triangle.png" alt="triangle" />
      <img className="spark icon" src="./about-section-spark.png" alt="spark" />
      <img className="main" src="./about-section-image.jpg" alt="about section" />
    </div>
  </div>
);

export default About;
