import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSearch } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <Link to="/">
            <FiHome />
          </Link>
          <Link to="/search">
            <FiSearch />
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
