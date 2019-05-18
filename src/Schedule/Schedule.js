import React from 'react';

import { timeline, schedule } from '../_services/schedule';

import './Schedule.scss';

import Title, { TitleAccent } from '../_components/Title';
import TimelineItem from './TimelineItem';
import ScheduleItem from './ScheduleItem';

const timeScalingDefault = 90 / 15;

const Schedule = () => (
  <section id="schedule" className="Schedule">
    <div className="container">
      <div className="ScheduleTitleContainer">
        <Title>
          React
          <TitleAccent color="primary2"> Schedule</TitleAccent>
        </Title>
        (subject to change)
      </div>
      <div className="ScheduleWrapper">
        <div className="ScheduleBody">
          <div className="ScheduleLocation">
            {schedule[0].map(item => (
              <ScheduleItem
                {...item}
                timeScaling={item.timeScaling || timeScalingDefault}
                orient="right"
                key={item.index}
              />
            ))}
          </div>

          <div className="ScheduleTimeline">
            {timeline.map(item => (
              <TimelineItem
                {...item}
                timeScaling={item.timeScaling || timeScalingDefault}
                key={item.time}
              />
            ))}
          </div>

          <div className="ScheduleLocation">
            {schedule[1].map(item => (
              <ScheduleItem
                {...item}
                timeScaling={item.timeScaling || timeScalingDefault}
                orient="left"
                key={item.index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Schedule;
