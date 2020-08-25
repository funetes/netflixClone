import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../../axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMoives] = useState([]);
  const [videoLink, setVideoLink] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results: movies },
      } = await axios.get(fetchUrl);
      setMoives(movies);
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const getVideoLink = movie => {
    if (videoLink) {
      setVideoLink('');
    } else {
      movieTrailer(movie?.name || movie?.title || '')
        .then(url => {
          const urlParams = new URL(url).search;
          const videoId = new URLSearchParams(urlParams).get('v');
          setVideoLink(videoId);
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => {
              getVideoLink(movie);
            }}
          />
        ))}
      </div>
      {videoLink && <Youtube videoId={videoLink} opts={opts} />}
    </div>
  );
}

export default Row;
