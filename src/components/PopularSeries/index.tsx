import React, { useState, useEffect } from 'react';
import api, { API_BASE_IMAGE_URL } from '../../services/api';
import { Link } from 'react-router-dom';

import { Section } from '../../styles/shared';

interface Serie {
  poster_path: string | undefined;
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
                <Link to={`/detail/serie/${serie.id}`}>
                  {serie.poster_path !== null ? (
                    <img
                      src={`${API_BASE_IMAGE_URL}w342${serie.poster_path}`}
                      alt="{serie.title}"
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

export default PopularSeries;
