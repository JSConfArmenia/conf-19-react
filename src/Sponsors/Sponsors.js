import React from 'react';

import './Sponsors.css';

const Sponsors = () => (
  <div className="Sponsors">
    <div className="container-left">
      <h2 id="Sponsors">Call for <span class="purple">Sponsors</span></h2>
      <p>Join the board of React Conf 2019 supporting IT companies, be at one of the biggest
        IT events in Armenia and get your company seen. Become a React Conf 2019 Sponsor!
      </p>
      <button id="become-sponsor">Take my money</button> 
    </div>
    <div className="container-right">
      <img src="/sponsors.png" alt=""></img>
    </div>

  </div>
);

export default Sponsors;
