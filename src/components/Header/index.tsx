import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const Header: React.FC = (props) => {
  return (
    <Container>
      <header>
        <h1>CINE</h1>
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
