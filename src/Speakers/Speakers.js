import React from 'react';
import Title, { TitleAccent } from '../_components/Title';
import Button from '../_components/Button';

import './Speakers.scss';

const Speakers = () => {
  const text = `Share your knowledge and skills in React or React Native with the Armenian
    React community. Become a React Conf 2019 speaker!`;

  return (
    <div className="Speakers">
      <div className="Speakers-image">
        <img src="/speakers.png" alt="" />
      </div>
      <div className="Speakers-info">
        <Title>
          {' '}
Call for
          <TitleAccent color="hero"> Speakers</TitleAccent>
        </Title>
        <p>{text}</p>
        <Button link href="http://bit.ly/speakReact">Become a SPEAKER</Button>
      </div>
    </div>
  );
};

export default Speakers;
