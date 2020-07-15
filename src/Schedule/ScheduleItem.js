import React from 'react';
import PropTypes from 'prop-types';

// import { Link } from 'react-scroll';

import './ScheduleItem.scss';

const getTopicBackground = ({ isBreak = false, level }) => {
  if (isBreak) {
    return '/frames/for_breaks.png';
  }

  const frames = {
    0: 'white_big.png',
    1: 'orange_small.png',
    2: 'blue_big.png',
    3: 'pink_big.png',
  };

  return `/frames/${frames[level]}`;
};


/*
  const handleSpeakerClick = () => {
    if (window.history.pushState) {
      window.history.pushState(null, null, '#speakers');
    } else {
      window.location.hash = 'speakers';
    }
  };
  <Link
    to={`speakers-${speaker.id}`}
    smooth="true"
    spy={false}
    offset={-100}
    onClick={handleSpeakerClick}
    className="ItemSpeakerLink"
    key={speaker.name}
  >
*/

const ScheduleItemSpeakers = ({ speakers = [] }) => (
  <div className="ScheduleItemSpeakers">
    {speakers.map(speaker => (
      <div className="ItemSpeaker" key={speaker.name}>
        {speaker.name}
        <div
          className="SpeakerImg"
          style={{
            backgroundImage: `url(${speaker.imgSmall})`,
          }}
        />
      </div>
    ))}
  </div>
);

// eslint-disable-next-line
const ScheduleItem = ({
  topic = '',
  language = '',
  speakers = [],
  duration,
  timeScaling,
  level,
  orient,
  isBreak,
  isGeneral,
  isPlaceholder,
}) => (
  <div
    className={`
      ScheduleItem
      -orient-${orient}
      ${isBreak ? '-break' : ''}
      ${isGeneral ? '-general' : ''}
      ${isPlaceholder ? '-placeholder' : ''}
    `}
    style={{
      height: `${duration * timeScaling}px`,
    }}
  >
    {speakers.length > 0
      && <ScheduleItemSpeakers speakers={speakers} />
    }
    <div className={`ItemTitle -level-${level} -orient-${orient}`}>
      {(isBreak || isGeneral) ? null : <span className="ItemLanguage">{language}</span>}
      <span className="ItemTopic">{topic || (speakers.length > 0 && speakers[0].topic)}</span>
      <img className="ItemTitleBackground" alt="Topic Background" src={getTopicBackground({ level, isBreak })} />
    </div>
  </div>
);


ScheduleItem.propTypes = {
  topic: PropTypes.string,
  speakers: PropTypes.arrayOf(PropTypes.object),
  orient: PropTypes.string,
  level: PropTypes.number,
  duration: PropTypes.number,
  timeScaling: PropTypes.number,
  isBreak: PropTypes.bool,
  isGeneral: PropTypes.bool,
  isPlaceholder: PropTypes.bool,
};

ScheduleItem.defaultProps = {
  topic: '',
  speakers: [],
  orient: 'right',
  level: null,
  duration: 15,
  timeScaling: 90 / 15,
  isBreak: false,
  isGeneral: false,
  isPlaceholder: false,
};

export default ScheduleItem;
