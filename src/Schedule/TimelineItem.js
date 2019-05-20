import React from 'react';

import './TimelineItem.scss';

const TimelineItem = ({
  time, duration, timeScaling, orient = '',
}) => (
  <div
    className={`TimelineItem -orient-${orient}`}
    style={{
      height: `${duration * timeScaling}px`,
    }}
  >
    <div className="TimeValue">
      {time}
      <div className="TimePattern" />
    </div>
  </div>
);

export default TimelineItem;
