import React from 'react';

import About from './About/About';
import Location from './Location/Location';
import Header from './Header/Header';
import Intro from './Intro/Intro';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Intro />
    <About />
    <Location />
  </div>
);

export default App;
