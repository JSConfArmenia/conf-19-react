import React from 'react';

import About from './About/About';
import Location from './Location/Location';
import Team from './Team/Team';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Sponsors from './Sponsors/Sponsors';
import Footer from './Footer/Footer';

import './root.scss';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Intro />
    <About />
    <Sponsors />
    <Team />
    <Location />
    <Footer />
  </div>
);

export default App;
