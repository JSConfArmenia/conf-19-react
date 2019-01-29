import React from 'react';

import './Sponsors.css';

const Sponsors = () => (
  <div className="Sponsors">
    <div className="container-left">
      <h2 id="Sponsors">Call for <span class="purple">Sponsors</span></h2>
      <p>Share your knowledge and skills in React or React Native with the Armenian
        React community. Become a React Conf 2019 speaker!
      </p>
      <a href="#" id="become-sponsor">Take my money</a> 
    </div>
    <div className="container-right">
      <img src="/sponsors.png" alt="Image of sponsors"></img>
    </div>

  </div>
);

export default Sponsors;
