import React from 'react';

import Header from '../../components/Header';

import PopularMovies from '../../components/PopularMovies';
import PopularSeries from '../../components/PopularSeries';
import Family from '../../components/Family';
import Documentary from '../../components/Documentary';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <PopularMovies />
      <PopularSeries />
      <Family />
      <Documentary />
    </>
  );
};

export default Dashboard;
