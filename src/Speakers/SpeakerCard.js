import React from 'react';

import './SpeakerCard.scss';
import Title from '../_components/Title';
import SpeakerSocialLink from './SpeakerSocialLink';

const SpeakerCard = ({
  img,
  name,
  topic,
  position,
  socialUrls,
}) => (
  <div className="SpeakerCard">
    <div className="SpeakerImageOverlay" />
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
      <div className="SpeakerSocialLinks">
        {socialUrls.map(url => (
          <SpeakerSocialLink url={url} key={url} />
        ))}
      </div>
    </div>
  </div>
);

export default SpeakerCard;
