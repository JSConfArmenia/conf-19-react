import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapOptions from './mapOptions';
import { Button, TitleAccent, Title } from '../_components';
import './Location.scss';

const Marker = () => (
  <a
    rel="noopener noreferrer"
    href="https://www.google.com/maps/place/Russian-Armenian+University/@40.210604,44.503545,16z/data=!4m5!3m4!1s0x0:0x6c75d8b0b7e883b5!8m2!3d40.2105717!4d44.5033138?hl=en-US"
    target="_blank"
    className="Marker"
  >
    {/* <div className="MarkerIllustration" /> */}
    <Button
      color="orange"
      size="small"
    >
      We Are Here
    </Button>
    {/* <div className="MarkerText">
      We Are Here
    </div> */}
  </a>
);

export default () => (
  <section id="location" className="Location">
    <Title>
      <TitleAccent color="hero">Location</TitleAccent>
    </Title>
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultZoom={16}
        defaultCenter={{
          lat: 40.210604,
          lng: 44.503545,
        }}
        options={mapOptions}
      >
        <Marker
          lat={40.210604}
          lng={44.503545}
        />
      </GoogleMapReact>
    </div>
    <img className="Splash" alt="Splash" src="/location-splash.png" />
  </section>
);
