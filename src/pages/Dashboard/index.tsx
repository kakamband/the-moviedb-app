import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';
import Section from '../../components/Section';

interface MovieParams {
  movie: string;
}

interface Movie {
  poster_path: string;
}

const Dashboard: React.FC = () => {
  const [movie, setMovie] = useState<Movie[]>([]);

  const { params } = useRouteMatch<MovieParams>();

  useEffect(() => {
    api.get(`/movie/popular`).then((response) => {
      setMovie(response.data);
    });
  }, [params.movie]);

  return (
    <>
      <Header />
      <Section />
      <Section />
      <Section />
    </>
  );
};

export default Dashboard;
