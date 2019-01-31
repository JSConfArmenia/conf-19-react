import React from 'react';

import Header from './Header/Header';
import Intro from './Intro/Intro';
import Footer from './Footer/Footer';

import './root.scss';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Intro />
    <Footer />
  </div>
);

export default App;
