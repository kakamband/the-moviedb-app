import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Section: React.FC = () => {
  return (
    <Container>
      <h1>Popular Movies</h1>
      <ul>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Detail">
            <img src="http://placekitten.com/200/300" alt="" />
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Section;
