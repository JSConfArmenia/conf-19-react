import React from 'react';
import PropTypes from 'prop-types';

import './ScheduleItem.scss';

const ScheduleItemSpeakers = ({ speakers = [] }) => (
  <div className="ScheduleItemSpeakers">
    {speakers.map(speaker => (
      <div className="ItemSpeaker" key={speaker.name}>
        {speaker.name}
        <div
          className="SpeakerImg"
          style={{
            backgroundImage: `url(${speaker.img})`,
          }}
        />
      </div>
    ))}
  </div>
);

// eslint-disable-next-line
const ScheduleItem = ({
  topic = '',
  speakers = [],
  duration,
  scaling,
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
      height: `${duration * scaling}px`,
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
  isBreak: PropTypes.bool,
  isGeneral: PropTypes.bool,
  isPlaceholder: PropTypes.bool,
};

ScheduleItem.defaultProps = {
  topic: '',
  speakers: [],
  orient: 'right',
  duration: 15,
  isBreak: false,
  isGeneral: false,
  isPlaceholder: false,
};

export default ScheduleItem;
