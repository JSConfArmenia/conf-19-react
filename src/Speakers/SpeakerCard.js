import React from 'react';

import './SpeakerCard.scss';
import Title from '../_components/Title';
import SpeakerSocialLink from './SpeakerSocialLink';

const SpeakerCard = ({
  id,
  img,
  name,
  topic,
  position,
  socialUrls,
}) => (
  <div className="SpeakerCard" id={`speakers-${id}`}>
    <div className="SpeakerImgContainer">
      <div className="SpeakerImageOverlay" />
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
