import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from '../../axios';
import request from '../../requests';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function truncateString(str, num) {
  if (str?.length > num) {
    return str?.slice(0, num) + '...';
  } else {
    return str;
  }
}

function Banner() {
  const [tvShow, setTvShow] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const {
        data: { results: tvShows },
      } = await axios.get(request.netflixOriginal);
      const randomTvShowNumber = Math.floor(Math.random() * tvShows.length - 1);
      setTvShow(tvShows[randomTvShowNumber]);
    };
    getMovie();
  }, []);
  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${baseUrl}${tvShow?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {tvShow?.title || tvShow?.name || tvShow?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncateString(tvShow?.overview, 200)}
        </h1>
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner;
