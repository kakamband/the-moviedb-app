import React, { useEffect, useState } from 'react';
import { getFamilyMovies, getFamilySeries } from '../../services/api';

import { Section } from '../../styles/shared';
import { Item } from '../Media';

import MediaCarousel from '../MediaCarousel';

const Family: React.FC = () => {
  const [familyMovies, setFamilyMovies] = useState<Item[]>([]);
  const [familySeries, setFamilySeries] = useState<Item[]>([]);

  useEffect(() => {
    async function loadFamilyMovies() {
      const familyMovies = await getFamilyMovies();

      setFamilyMovies(
        familyMovies.map((item: Item) => ({
          ...item,
          media_type: 'movie',
        })),
      );
    }
    loadFamilyMovies();

    async function loadFamilySeries() {
      const familySeries = await getFamilySeries();
      setFamilySeries(
        familySeries.map((item: Item) => ({
          ...item,
          media_type: 'tv',
        })),
      );
    }
    loadFamilySeries();
  }, []);

  const family = familySeries
    .concat(familyMovies)
    .sort(() => 0.5 - Math.random())
    .slice(0, 20);

  return (
    <>
      {family && (
        <Section>
          <h1>Family</h1>
          <MediaCarousel items={family} />
        </Section>
      )}
    </>
  );
};

export default Family;
