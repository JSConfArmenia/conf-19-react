import React from 'react';

import Header from './Header/Header';
import Intro from './Intro/Intro';
import About from './About/About';
import Speakers from './Speakers/Speakers';
import Sponsors from './Sponsors/Sponsors';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Intro />
    <About />
    <Speakers />
    <Sponsors />
  </div>
);

export default App;
