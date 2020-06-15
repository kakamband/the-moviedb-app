import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import notfound from '../../assets/notfound.svg';

import { Section } from '../../styles/shared';

import { API_BASE_IMAGE_URL } from '../../services/api';

import client from '../../services/client';

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
    client.get(`/discover/movie?with_genres=10751`).then((response) => {
      setGenreMovie(response.data.results);
    });

    client.get(`discover/tv?with_genres=10751`).then((response) => {
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

export default Family;
