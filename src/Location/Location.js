import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapOptions from './mapOptions';
import './Location.css';

export default () => (
  <div className="Location">
    {/* REPLACE WITH TITLE COMPONENT */}
    <h1>Location</h1>
    {/* REPLACE WITH TITLE COMPONENT */}
    <div style={{ width: '960px', height: '540px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDrPSNUf_6iI95MrqwlcT7njNrt6rU0CAE' }}
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
