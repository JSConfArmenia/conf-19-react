import React from 'react';
import Title, { TitleAccent } from '../_components/Title';
import Button from '../_components/Button';

import './Sponsors.scss';

const Sponsors = () => {
  const text = `Join the board of React Conf 2019 supporting
    IT companies, be at one of the biggest IT events in Armenia
    and get your company seen. Become a React Conf 2019 sponsor!`;

  return (
    <div className="Sponsors">
      <div className="Sponsors-info">
        <Title>
          {' '}
Call for
          <TitleAccent color="primary1"> Sponsors</TitleAccent>
        </Title>
        <p>{text}</p>
        <Button color="orange">BECOME A SPONSOR</Button>
      </div>
      <div className="Sponsors-image">
        <img src="/sponsors.png" alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
