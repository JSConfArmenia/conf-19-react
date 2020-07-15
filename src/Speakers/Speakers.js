import React from 'react';

import './Speakers.scss';
import speakersSerivce from '../_services/speakers';

import Title, { TitleAccent } from '../_components/Title';
// import Description from '../_components/Description';
// import Button from '../_components/Button';
import SpeakerCard from './SpeakerCard';


const speakersList = [
  'Sara_Vieira',
  'Roy_Derks',
  'Dan_Abramov',
  'Denys_Radin',
  'Narendra_Shetty',
  'Rebecca_Hill',
  'Cristian_Oliveira_da_Rosa',
  'Elizabet_Oliveira',
  'Jesse_Martin',
  'Khachatur_Virabyan',
  'Eugene_Zharkov',
  'Varik_Matevosyan',
  'Leandro_Ostera',
  'Lilit_Tadevosyan',
  'Gagik_Arustamyan',
  'Taguhi_Asatryan',
  'Radoslaw_Malecki',
  'Nver_Abgaryan',
].map(id => ({
  id,
  ...speakersSerivce[id],
}));

const Speakers = () => (
  <section id="speakers" className="Speakers">
    <div className="container">
      <div className="SpeakersTitleContainer">
        <Title>
          React
          <TitleAccent color="hero"> Speakers</TitleAccent>
        </Title>
      </div>
      <div className="row">
        {speakersList.map(speaker => (
          <div
            className="col-md-6"
            key={speaker.id}
          >
            <SpeakerCard {...speaker} />
          </div>
        ))}
      </div>
      {/* <div className="row SpeakersApplicationContainer">
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

      </div> */}
    </div>
  </section>
);

export default Speakers;
