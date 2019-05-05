import React from 'react';
import Title, { TitleAccent } from '../_components/Title';
import Button from '../_components/Button';
import Description from '../_components/Description';

import './Sponsors.scss';

const sponsorImages = {
  Gold: ['Digitain.png', 'Service_Titan.png', 'VMware.png'],
  Silver: ['WorkFront.png', 'simply.png', 'Vineti_vertical.png', 'renderforest.png', 'flux.svg', 'Steadfast.svg', 'King_mampreh_logo.png'],
  PartnersFriends: ['RAU.png', 'StickerMule.png'],
};

const sponsorsUrls = {
  simply: 'https://www.simplytechnologies.net/',
  renderforest: 'https://www.renderforest.com/',
  StickerMule: 'https://www.stickermule.com/uses/laptop-stickers?utm_source=sponsorship&utm_medium=referral&utm_campaign=ReactConfArmenia19',
  Digitain: 'https://digitain.com/',
  Service_Titan: 'https://www.servicetitan.com/',
  VMware: 'https://www.vmware.com/',
  Vineti_vertical: 'https://vineti.com/',
  King_mampreh_logo: 'https://www.facebook.com/kingmampreh/',
  WorkFront: 'https://www.workfront.com/',
  BetConstruct: 'https://www.betconstruct.com/',
  RAU: 'http://www.rau.am/rus',
  flux: 'https://fluxtech.me/',
  Steadfast: 'https://steadfast.tech/',
};

// please don't kill me for this code :D
// TODO :: improve
// Ներում ենք ;)
// OMG, who wrote this?!!! :D
// of course, me :P
const SponsorsLogoList = type => (
  <ul className="List SponsorsLogoList">
    {
      sponsorImages[type].map((sponsorImageName) => {
        const sponsorName = sponsorImageName.split('.')[0];
        const image = (
          <img
            src={`./sponsors/${type}/${sponsorImageName}`}
            alt={sponsorName}
            className={`${type}Sponsors`}
          />
        );
        if (sponsorsUrls[sponsorName]) {
          return (
            <a
              href={sponsorsUrls[sponsorName]}
              key={sponsorName}
              target="_blank"
              className={sponsorName}
              rel="noopener noreferrer"
            >
              {image}
            </a>
          );
        }
        return image;
      })
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
        { SponsorsLogoList('Gold') }
        <Description>Silver Sponsors</Description>
        { SponsorsLogoList('Silver') }
        <Description>Partners & Friends</Description>
        { SponsorsLogoList('PartnersFriends') }
      </div>
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
