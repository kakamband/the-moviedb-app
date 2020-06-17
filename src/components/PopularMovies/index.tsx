import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../../services/api';

import { Section } from '../../styles/shared';
import { Item } from '../Media';

import MediaCarousel from '../MediaCarousel';

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Item[]>([]);

  useEffect(() => {
    //It get popularMovie from Api endpoint(services/api.ts)
    async function loadPopularMovies() {
      const popularMovies = await getPopularMovies();
      setMovies(
        popularMovies.map((item: Item) => ({
          ...item,
          media_type: 'movie',
        })),
      );
    }
    loadPopularMovies();
  }, []);

  return (
    <>
      {movies && (
        <Section>
          <h1>Popular Movies</h1>
          <MediaCarousel items={movies} />
        </Section>
      )}
    </>
  );
};

export default PopularMovies;
