import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../../styles/shared';

import api, { API_BASE_IMAGE_URL } from '../../services/api';

interface Movie {
  poster_path: string | undefined;
  original_title: string;
  overview: string;
  title: string;
  release_date: string;
  id: number;
  origen_country: string;
}

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    api.get(`movie/popular`).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <>
      {movies && (
        <Section>
          <h1>Popular Movies</h1>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to="/Detail">
                  <img
                    src={`${API_BASE_IMAGE_URL}w342${movie.poster_path}`}
                    alt="{movie.title}"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};

export default PopularMovies;
