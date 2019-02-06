import React from 'react';

import About from './About/About';
import Speakers from './Speakers/Speakers';
import Location from './Location/Location';
import Team from './Team/Team';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Footer from './Footer/Footer';

import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Intro />
    <About />
    <Speakers />
    <Team />
    <Location />
    <Footer />
  </div>
);

export default App;
