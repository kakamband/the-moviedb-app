import client from './client';

export const API_BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/';

export const VIDEO_LIST_URI =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export async function getPopularMovies() {
  const response = await client.get(`movie/popular`);
  return response.data.results;
}

export async function getPopularSeries() {
  const response = await client.get(`tv/popular`);
  return response.data.results;
}

export async function getPopular(type: string) {
  const response = await client.get(`${type}/popular`);
  return response.data.results;
}

export async function getByGenre(type: string, genre: any[]) {
  const response = await client.get(
    `/discover/${type}?with_genres=${genre.join(',')}`,
  );
  return response.data.results;
}

export async function getFamilyMovies() {
  return getByGenre('movie', [10751]);
}

export async function getFamilySeries() {
  return getByGenre('tv', [10751]);
}

export async function getDocumentaries() {
  return getByGenre('movie', [99]);
}

export async function getResults(query: string) {
  const response = await client.get(`search/multi?query=${query}`);
  return response.data.results;
}

export async function getDetail(type: string, id: string) {
  const response = await client.get(`${type}/${id}`);
  return response.data;
}
