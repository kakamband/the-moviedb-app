import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../../styles/shared';

import api, { API_BASE_IMAGE_URL } from '../../services/api';

interface Serie {
  poster_path: string | undefined;
  overview: string;
  original_title: string;
  first_air_date: string;
  name: string;
  release_date: string;
  id: number;
}

const PopularSeries: React.FC = () => {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    api.get(`tv/popular`).then((response) => {
      setSeries(response.data.results);
    });
  }, []);

  return (
    <>
      {series && (
        <Section>
          <h1>Popular series</h1>
          <ul>
            {series.map((serie) => (
              <li key={serie.id}>
                <Link to="/Detail">
                  <img
                    src={`${API_BASE_IMAGE_URL}w342${serie.poster_path}`}
                    alt="{serie.name}"
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

export default PopularSeries;
