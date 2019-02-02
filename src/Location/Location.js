import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapOptions from './mapOptions';
import { TitleAccent, Title } from '../_components';
import './Location.css';

export default () => (
  <div className="Location">
    <Title>
      <TitleAccent color="hero">Location</TitleAccent>
    </Title>
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultZoom={16}
        defaultCenter={{
          lat: 40.2105717,
          lng: 44.5011251,
        }}
        options={mapOptions}
      />
    </div>
    <img alt="splash" src="/location-splash.png" />
  </div>
);
