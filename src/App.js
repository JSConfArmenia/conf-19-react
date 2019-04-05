import React from 'react';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

import About from './About/About';
import Location from './Location/Location';
import Team from './Team/Team';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Footer from './Footer/Footer';
import FAQ from './Faq/Faq';
import Speakers from './Speakers/Speakers';
import Sponsors from './Sponsors/Sponsors';
import Jobs from './Jobs/Jobs';

import './App.scss';

const App = () => {
  const position = useWindowScrollPosition({
    throttle: 0,
  });
  const backgroundOffset = 0.4 * position.y;

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Speakers />
      <Sponsors />
      <Team />
      <Location />
      <Jobs />
      <FAQ />
      <Footer />
      <div
        className="BackgroundIllustration"
        style={{ backgroundPositionY: `${backgroundOffset}px` }}
      />
    </div>
  );
};

export default App;
