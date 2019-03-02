import React from 'react';
import Title, { TitleAccent } from '../_components/Title';
import Description from '../_components/Description';
import Button from '../_components/Button';

import './Speakers.scss';

const Speakers = () => (
  <section className="Speakers" id="Speakers">
    <div className="container">
      <div className="row">

        <div className="col-lg-6 order-lg-2">
          <div className="SectionBox">
            <Title>
              Call for
              <TitleAccent color="hero"> Speakers</TitleAccent>
            </Title>
            <Description>
              Share your knowledge and skills in React or React Native with the Armenian
              React community. Become a React Conf 2019 speaker!
            </Description>
            <Button link href="http://bit.ly/speakReact">Become a SPEAKER</Button>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="IllustrationContainer">
            <img
              className="Illustration"
              src="./speakers.png"
              alt="React Conf Armenia Speakers"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Speakers;
