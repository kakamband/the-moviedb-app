import React, { useEffect, useState } from 'react';
import { getFamilyMovies, getFamilySeries } from '../../services/api';

import { Section } from '../../styles/shared';
import Media from '../Media';

interface Item {
  poster_path: string | null;
  title: string;
  name: string;
  id: number;
  type: string;
}

const Family: React.FC = () => {
  const [familyMovies, setFamilyMovies] = useState<Item[]>([]);
  const [familySeries, setFamilySeries] = useState<Item[]>([]);

  useEffect(() => {
    async function loadFamilyMovies() {
      const familyMovies = await getFamilyMovies();

      setFamilyMovies(
        familyMovies.map((item: Item) => ({
          ...item,
          type: 'movie',
        })),
      );
    }
    loadFamilyMovies();

    async function loadFamilySeries() {
      const familySeries = await getFamilySeries();
      setFamilySeries(
        familySeries.map((item: Item) => ({
          ...item,
          type: 'tv',
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
          <ul>
            {family.map((item) => (
              <li key={item.id}>
                <Media item={item} type={item.type} />
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};

export default Family;
