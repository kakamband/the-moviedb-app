import React from 'react';

import { Container, Content, Form } from './styles';
import Section from '../../components/Section';
import Header from '../../components/Header';

const Search: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <h1>CINE</h1>
          <Form>
            <input type="{search}" placeholder="Type here" />
            <button type="submit">Search</button>
          </Form>
          <Section />
        </Content>
      </Container>
    </>
  );
};

export default Search;
