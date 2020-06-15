import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import notfound from '../../assets/notfound.svg';

import { Section } from '../../styles/shared';

import api, { API_BASE_IMAGE_URL } from '../../services/api';

interface IDocumentary {
  poster_path: string | null;
  overview: string;
  title: string;
  release_date: string;
  id: number;
}

const Documentary: React.FC = () => {
  const [documentarys, setDocumentary] = useState<IDocumentary[]>([]);

  useEffect(() => {
    api.get(`/discover/movie?with_genres=99`).then((response) => {
      setDocumentary(response.data.results);
    });
  }, []);

  return (
    <>
      {documentarys && (
        <Section>
          <h1>Documentary</h1>
          <ul>
            {documentarys.map((documentary) => (
              <li key={documentary.id}>
                <Link to={`/Detail/documentary/${documentary.id}`}>
                  {documentary.poster_path !== null ? (
                    <img
                      src={`${API_BASE_IMAGE_URL}w342${documentary.poster_path}`}
                      alt="{Documentary.title}"
                    />
                  ) : (
                    <img src={notfound} alt="notfound" />
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

export default Documentary;
