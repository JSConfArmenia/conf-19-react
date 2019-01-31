import React from 'react';

import Title, { TitleAccent } from '../_components/Title';

import './About.css';

const About = () => (
  <div className="About">
    <div className="info-container">
      <Title>
        What is
        {' '}
        <TitleAccent color="primary1">React Conf</TitleAccent>
      </Title>
      <p>
        React Conf is an all-React conference,
        gathering front-end and full-stack
        developers in one place to share
        knowledge, skills, to network, and
        just to have fun.
      </p>
    </div>
    <img className="triangle" src="./about-section-triangle.png" alt="triangle" />
    <img className="spark" src="./about-section-spark.png" alt="spark" />
    <img className="main" src="./about-section-image.png" alt="about section" />
  </div>
);

export default About;
