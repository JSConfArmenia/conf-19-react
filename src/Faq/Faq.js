/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-scroll';

import { TitleAccent, Title } from '../_components';
import './Faq.css';

export default () => (
  <div id="faq" className="FAQ">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Title>
            Frequently Asked
            <TitleAccent color="primary1"> Questions</TitleAccent>
          </Title>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>What is React Conf Armenia?</h3>
          <p>
            React Conf is to bring together Armenian React developers to
            attend talks, workshops, participate in competitions, get informed
            about open positions at sponsor IT companies and just have fun.
          </p>
          <h3>What is the conference code of conduct?</h3>
          <p>
            All attendees, speakers, sponsors and volunteers at our conference are
            required to agree with the following{' '}
            <a
              href="https://github.com/JSConfArmenia/conf-19-react/blob/master/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              code of conduct
            </a>.
          </p>
          <h3>Who are the speakers?</h3>
          <p>
            To learn more about our speakers, please, click here.
            Want to join them?
            <Link
              to="Speakers"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
            >
              Apply here
            </Link>&nbsp;
            to become a speaker.
          </p>
          <h3>What are the talk topics?</h3>
          <p>To see the talk sessions timetable and topics, please click here.</p>
          <h3>What is the conference language?</h3>
          <p>
            The conference will be held mainly in Armenian but there will be
            also some English talks in the program.
          </p>
          <h3>When is it going to take place?</h3>
          <p>The conference will take place from 10:00 to 17:30 on May 25, 2019.</p>
          <h3>Where is it going to be held?</h3>
          <p>React Conf Armenia will be held at Russian-Armenian University (Hovsep Emin 123).</p>
        </div>
        <div className="col-md-6">
          <h3>How to participate?</h3>
          <p>
            The entry of React Conf 2018 is invitation-only so please make sure to request
            your invite <a href="http://bit.ly/joinReactConfAM">here</a>.
          </p>
          <h3>How much is the entry-ticket?</h3>
          <p>The event entry is free of charge.</p>
          <h3>When is the deadline for registration?</h3>
          <p>
            There is no deadline but the sooner you register the more interesting
            it will be for you as a participant as you will have the chance to take
            part in the pre-conference activities.
          </p>
          <h3>Who are behind the React Conf Armenia?</h3>
          <p>To see the React Conf Armenia team, please, click&nbsp;
            <Link
              to="Team"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
            >
              here
            </Link>
          .
          </p>
          <h3>How to join the team?</h3>
          <p>
            To help the team to make React Conf Armenia happen please
            apply <a href="http://bit.ly/ReactAngels">here</a> to become a React Conf ninja volunteer!
          </p>
          <h3>Who supports React Conf Armenia?</h3>
          <p>
            To learn about our sponsors and partners, please, click&nbsp;
            <Link
              to="Sponsors"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
            >
              here
            </Link>
            .
          </p>
          <h3>Will I get a certificate of participation?</h3>
          <p>
            Your certificate of participation in React Conf is going to be
            your larger network in IT, updated knowledge, nice little gifts
            and good memories. Do you still need that piece of paper?
          </p>
        </div>
      </div>
    </div>
  </div>
);
