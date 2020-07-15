import React from 'react';
import { TitleAccent, Title, Button } from '../_components';
import './Quiz.css';

const Quiz = () => (
  <section id="Quiz" className="Quiz">
    <Title className="Title">
          Proove your
      <TitleAccent color="hero"> React</TitleAccent>
      <span> skills</span>
    </Title>
    <div className="container content">
      <div className="logo">
        <img src="./quiz-illustration.png" className="quiz-logo" alt="" />
        <img src="./quiz-splash.png" className="quiz-splash" alt="" />
      </div>
      <div className="quiz-info-section">
        <p className="quiz-info">
          We will choose top 10% performers who will win a React Champion button badge.
          Please make sure to provide your email address so we can contact you.
        </p>
        <Button
          link
          size="default"
          className="quiz-btn"
          href="$"
        >
          Go to the Quiz
        </Button>
      </div>
    </div>
  </section>
);

export default Quiz;
