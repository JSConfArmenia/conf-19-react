import React from 'react';

import './TimelineItem.scss';

const TimelineItem = ({ time, duration, scaling }) => (
  <div
    className="TimelineItem"
    style={{
      height: `${duration * scaling}px`,
    }}
  >
    <div className="TimeValue">{time}</div>
  </div>
);

export default TimelineItem;
