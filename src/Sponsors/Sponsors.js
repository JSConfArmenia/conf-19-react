import React from 'react';
import Title, { TitleAccent } from '../_components/Title';
import Button from '../_components/Button';
import Description from '../_components/Description';

import './Sponsors.scss';

const Sponsors = () => (
  <div id="sponsors" className="Sponsors">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="SectionBox">
            <Title>
              Call for
              <TitleAccent color="primary1"> Sponsors</TitleAccent>
            </Title>
            <Description>
              Join the board of React Conf 2019 supporting
              IT companies, be at one of the biggest IT events in Armenia
              and get your company seen. Become a React Conf 2019 sponsor!
            </Description>
            <Button
              link
              href="http://bit.ly/sponsorReactConf2019"
              color="orange"
            >
            BECOME A SPONSOR
            </Button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="IllustrationContainer">
            <img
              className="Illustration"
              src="./sponsors.png"
              alt="React Conf Armenia Sponsors"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sponsors;
