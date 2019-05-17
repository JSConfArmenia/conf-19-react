import React from 'react';

import './Schedule.scss';

import Title, { TitleAccent } from '../_components/Title';

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
      <div className="ScheduleBody">
        <div className="ScheduleRow">
          <div className="ScheduleItem">
            <div className="ItemTitle -large">
              OPENING
            </div>
          </div>
          <div className="ScheduleTime">
            <div className="TimeValue">10:00</div>
          </div>
          <div className="ScheduleItem" />
        </div>
        <div className="ScheduleRow">
          <div className="ScheduleItem">
            <div className="ItemSpeaker">
              Elizabet Oliveira
              <div
                className="SpeakerImg"
                style={{
                  backgroundImage: 'url(/speakers/Elizabet_Oliveira.jpg)',
                }}
              />
            </div>
            <div className="ItemTitle">
              An SVG tale
            </div>
          </div>
          <div className="ScheduleTime">
            <div className="TimeValue">10:30</div>
          </div>
          <div className="ScheduleItem">
            <div className="ItemSpeaker">
              <div
                className="SpeakerImg"
                style={{
                  backgroundImage: 'url(/speakers/Elizabet_Oliveira.jpg)',
                }}
              />
              Lilit Tadevosyan
            </div>
            <div className="ItemTitle">
              Server-side rendering with React: Win or Lose
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Schedule;
