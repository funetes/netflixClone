import API_KEY from './apiKey';

const requests = {
  nowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  popular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export default requests;
