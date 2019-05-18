import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-scroll';

import './ScheduleItem.scss';

const handleSpeakerClick = () => {
  if (window.history.pushState) {
    window.history.pushState(null, null, '#speakers');
  } else {
    window.location.hash = 'speakers';
  }
};

const ScheduleItemSpeakers = ({ speakers = [] }) => (
  <div className="ScheduleItemSpeakers">
    {speakers.map(speaker => (
      <Link
        to={`speakers-${speaker.id}`}
        smooth="true"
        spy={false}
        offset={-100}
        onClick={handleSpeakerClick}
        className="ItemSpeakerLink"
        key={speaker.name}
      >
        <div className="ItemSpeaker">
          {speaker.name}
          <div
            className="SpeakerImg"
            style={{
              backgroundImage: `url(${speaker.img})`,
            }}
          />
        </div>
      </Link>
    ))}
  </div>
);

// eslint-disable-next-line
const ScheduleItem = ({
  topic = '',
  speakers = [],
  duration,
  timeScaling,
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
    <div className="ItemTitle">
      {topic || (speakers.length > 0 && speakers[0].topic)}
    </div>
  </div>
);


ScheduleItem.propTypes = {
  topic: PropTypes.string,
  speakers: PropTypes.arrayOf(PropTypes.object),
  orient: PropTypes.string,
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
  duration: 15,
  timeScaling: 90 / 15,
  isBreak: false,
  isGeneral: false,
  isPlaceholder: false,
};

export default ScheduleItem;
