import React from 'react';

import Header from '../../components/Header';
import Family from '../../components/Family';
import Documentary from '../../components/Documentary';
import PopularMovies from '../../components/PopularMovies';
import PopularSeries from '../../components/PopularSeries';

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
