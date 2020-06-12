import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../../styles/shared';

import api, { API_BASE_IMAGE_URL } from '../../services/api';

interface Item {
  poster_path: string | undefined;
  title: string;
  id: number;
}

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Item[]>([]);

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
                <Link to={`/detail/movie/${movie.id}`}>
                  {movie.poster_path !== null ? (
                    <img
                      src={`${API_BASE_IMAGE_URL}w342${movie.poster_path}`}
                      alt="{movie.title}"
                    />
                  ) : (
                    <h1>colocar imagem error</h1>
                  )}
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
