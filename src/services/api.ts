// this file declaring all Api endpoints
import client from './client';

// It is the route to img database
export const API_BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';

// It is the route to sample video
export const VIDEO_LIST_URI =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

// It calls the endpoint to Popular Movies
export async function getPopularMovies() {
  const response = await client.get(`movie/popular`);
  return response.data.results;
}

// It calls the endpoint to Popular TvShows/Serie
export async function getPopularSeries() {
  const response = await client.get(`tv/popular`);
  return response.data.results;
}

// It gets popular by type (tv/movie)
export async function getPopular(type: string) {
  const response = await client.get(`${type}/popular`);
  return response.data.results;
}

// It gets genre by type(tv/movie) and genre(family/documentary)
export async function getByGenre(type: string, genre: any[]) {
  const response = await client.get(
    `/discover/${type}?with_genres=${genre.join(',')}`,
  );
  const results = response.data.results.map((item: any) => ({
    ...item,
    media_type: type,
  }));
  return results;
}

// This function gets all genre and set it in an array.This will use in component/Family
export async function getAllByGenre(genre: any[]) {
  let tv = await getByGenre('tv', genre);
  let movies = await getByGenre('movie', genre);

  // more about concat array https://gist.github.com/yesvods/51af798dd1e7058625f4
  return [...tv, ...movies];
}

// It calls the endpoint to documentary genre
export async function getDocumentaries() {
  return getByGenre('movie', [99]);
}

// It gets the search by query
export async function getResults(query: string) {
  const response = await client.get(`search/multi?query=${query}`);
  return response.data.results;
}

// It gets the detail by type(tv/movie) and id
export async function getDetail(type: string, id: string) {
  const response = await client.get(`${type}/${id}`);
  return response.data;
}
