import axios from 'axios';

export const API_BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/';

export const VIDEO_LIST_URI =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const API_TOKEN = process.env.REACT_APP_API_TOKEN || 'api-token';
axios.defaults.headers.common = { Authorization: `Bearer ${API_TOKEN}` };

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;
