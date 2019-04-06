import React from 'react';

import './SpeakerCard.scss';
import Title from '../_components/Title';

const SpeakerCard = ({
  img,
  name,
  topic,
  position,
}) => (
  <div className="SpeakerCard">
    <div className="SpeakerImgContainer">
      <img
        alt={name}
        src={img}
        className="SpeakerImg"
      />
    </div>
    <div className="SpeakerInfoContainer">
      <Title className="SpeakerName" size="small">{name}</Title>
      <div className="SpeakerPosition -text-muted">
        {position}
      </div>
      <div className="SpeakerTopic">
        {topic}
      </div>
    </div>
  </div>
);

export default SpeakerCard;
