import React from 'react';

import sponsors from '../_services/sponsors';
import Title, { TitleAccent } from '../_components/Title';
// import Button from '../_components/Button';
import Description from '../_components/Description';

import './Sponsors.scss';


// please don't kill me for this code :D
// TODO :: improve
// Ներում ենք ;)
// OMG, who wrote this?!!! :D
// of course, me :P
const SponsorsLogoList = type => (
  <ul className="List SponsorsLogoList">
    {
      sponsors[type].map(({ name, url }) => (
        <a
          href={url}
          key={name}
          target="_blank"
          className={`SponsorItem -${type} -${name}`}
          rel="noopener noreferrer"
        >
          <img
            src={`./sponsors/${name}.svg`}
            alt={name}
            className={`SponsorImage -${type} -${name}`}
          />
        </a>
      ))
    }
  </ul>
);

const Sponsors = () => (
  <div id="sponsors" className="Sponsors">
    <div className="container">
      <div className="SponsorsTitleContainer">
        <Title>
          React Conf
          <TitleAccent color="primary1"> Sponsors</TitleAccent>
        </Title>
        <Description>Gold Sponsors</Description>
        { SponsorsLogoList('gold') }
        <Description>Silver Sponsors</Description>
        { SponsorsLogoList('silver') }
        <Description>Partners & Friends</Description>
        { SponsorsLogoList('partner') }
      </div>
      {/*
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
      */}
    </div>
  </div>
);

export default Sponsors;
