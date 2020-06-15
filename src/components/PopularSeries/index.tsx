import React, { useState, useEffect } from 'react';
import { getPopularSeries } from '../../services/api';

import { Section } from '../../styles/shared';
import Media, { Item } from '../Media';

const PopularSeries: React.FC = () => {
  const [series, setSeries] = useState<Item[]>([]);

  useEffect(() => {
    async function loadPopularSeries() {
      const popularSeries = await getPopularSeries();
      setSeries(popularSeries);
    }
    loadPopularSeries();
  }, []);

  return (
    <>
      {series && (
        <Section>
          <h1>Popular series</h1>
          <ul>
            {series.map((item) => (
              <li key={item.id}>
                <Media item={item} type="tv" />
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};

export default PopularSeries;
