import React from 'react';

import { timeline, schedule } from '../_services/schedule';

import './Schedule.scss';

// import colors from '../_constants/colors';
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
      </div>
      <div className="ScheduleLevels">
        <div className="Level">
          <img
            className="LevelIcon"
            src="/level-1.png"
            alt="Beginner Level"
          />
          Beginner
        </div>
        <div className="Level">
          <img
            className="LevelIcon"
            src="/level-2.png"
            alt="Intermediate Level"
          />
          Intermediate
        </div>
        <div className="Level">
          <img
            className="LevelIcon"
            src="/level-3.png"
            alt="Intermediate - Advanced Level"
          />
          Intermediate - Advanced
        </div>
        <div className="Level">
          <img
            className="LevelIcon"
            src="/level-0.png"
            alt="Any Level"
          />
          Any Level
        </div>
      </div>
      <div className="ScheduleWrapper">
        <div className="ScheduleBody">
          <div className="ScheduleLocation -orient-right">
            <Title><TitleAccent color="primary1">Main Hall</TitleAccent></Title>
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
            <Title style={{ visibility: 'hidden' }}>PH</Title>
            {timeline.map(item => (
              <TimelineItem
                {...item}
                timeScaling={item.timeScaling || timeScalingDefault}
                key={item.time}
              />
            ))}
          </div>

          <div className="ScheduleLocation  -orient-left">
            <Title><TitleAccent color="hero">Blue Hall</TitleAccent></Title>
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
