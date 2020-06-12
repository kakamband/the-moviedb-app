import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../../styles/shared';

import api, { API_BASE_IMAGE_URL } from '../../services/api';

interface IFamilyGenre {
  poster_path: string | null;
  overview: string;
  title: string;
  release_date: string;
  id: number;
  name: string;
  first_air_date: string;
}

const Family: React.FC = () => {
  const [genremovie, setGenreMovie] = useState<IFamilyGenre[]>([]);
  const [genretv, setGenreTv] = useState<IFamilyGenre[]>([]);

  useEffect(() => {
    api.get(`/discover/movie?with_genres=10751`).then((response) => {
      setGenreMovie(response.data.results);
    });

    api.get(`discover/tv?with_genres=10751`).then((response) => {
      setGenreTv(response.data.results);
    });
  }, []);

  const familyGenre = genremovie.concat(genretv);

  return (
    <>
      {familyGenre && (
        <Section>
          <h1>Family</h1>
          <ul>
            {familyGenre.map((genre) => (
              <li key={genre.id}>
                <Link to="/Detail">
                  {genre.poster_path !== null ? (
                    <img
                      src={`${API_BASE_IMAGE_URL}w342${genre.poster_path}`}
                      alt="{genre.title}"
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

export default Family;
