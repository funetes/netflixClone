import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from '../requests';
import Nav from './Nav';

function App() {
  return (
    <div className='app'>
      {/* Nav */}
      <Nav />
      <Banner />
      <Row title='Now Playing' fetchUrl={requests.nowPlaying} isLargeRow />
      <Row title='Up Coming' fetchUrl={requests.upcoming} />
      <Row title='Top Rated' fetchUrl={requests.topRated} />
      <Row title='Popular' fetchUrl={requests.popular} />
    </div>
  );
}

export default App;
