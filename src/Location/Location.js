import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapOptions from './mapOptions';
import './Location.css';

export default () => (
  <div className="Location">
    {/* REPLACE WITH TITLE COMPONENT */}
    <h1>Location</h1>
    {/* REPLACE WITH TITLE COMPONENT */}

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
  </div>
);
