import React, { useEffect, useState } from 'react';

import { getPopularMovies } from '../../services/api';

import { Section } from '../../styles/shared';
import Media, { Item } from '../Media';

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Item[]>([]);

  useEffect(() => {
    async function loadPopularMovies() {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    }
    loadPopularMovies();
  }, []);

  return (
    <>
      {movies && (
        <Section>
          <h1>Popular Movies</h1>
          <ul>
            {movies.map((item) => (
              <li key={item.id}>
                <Media item={item} type="movie" />
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};

export default PopularMovies;
