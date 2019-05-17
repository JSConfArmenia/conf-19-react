import React from 'react';

import About from './About/About';
import Location from './Location/Location';
import Team from './Team/Team';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Footer from './Footer/Footer';
import FAQ from './Faq/Faq';
import Speakers from './Speakers/Speakers';
import Sponsors from './Sponsors/Sponsors';
import Schedule from './Schedule/Schedule';
import Jobs from './Jobs/Jobs';
import Background from './Background/Background';

import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Intro />
    <About />
    <Schedule />
    <Speakers />
    <Sponsors />
    <Team />
    <Location />
    <Jobs />
    <FAQ />
    <Footer />
    <Background />
  </div>
);

export default App;
