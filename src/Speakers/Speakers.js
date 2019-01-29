import React from 'react';

import './Speakers.css';

const Speakers = () => (
  <div className="Speakers">
    <div className="container-left">
      <img src="/speaker.png" alt="Image of a speaker"></img>
    </div>
    <div className="container-right">
    <h2 id="Speakers">Call for <span class="hero-blue">Speakers</span></h2>
      <p>Share your knowledge and skills in React or React Native with the Armenian
          React community. Become a React Conf 2019 speaker!
      </p>
      <a href="#" id="become-speaker">Become a SPEAKER</a> 
    </div>
  </div>
);

export default Speakers;
