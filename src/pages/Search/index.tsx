import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../styles/shared';

import api, { API_BASE_IMAGE_URL } from '../../services/api';

import { Container, Content, Form, Error } from './styles';
import Header from '../../components/Header';

interface IResult {
  poster_path: string | null;
  overview: string;
  realese_date: string;
  original_title: string;
  original_language: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_avanger: number;
  first_air_date: string;
  origin_country: string;
  name: string;
  original_name: string;
  id: number;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [inputError, setInputError] = useState('');
  const [result, setResult] = useState<IResult[]>([]);

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!query) {
      setInputError('To be continue, you need add a Search.');
      return;
    }

    try {
      const response = await api.get(`search/multi?query=${query}`);

      setResult(response.data.results);
      console.log(response.data.results);
      setQuery('');
      setInputError('');
    } catch (err) {
      setInputError('Sorry, nothing found.');
    }
  }

  return (
    <>
      <Container>
        <Header />
        <Content>
          <h1>CINE</h1>

          <Form onSubmit={handleSearch}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type here"
            />

            <button type="submit">Search</button>
          </Form>
        </Content>

        {inputError && <Error>{inputError}</Error>}

        {result.length > 0 && (
          <Section>
            <h1>Results</h1>
            <ul>
              {result.map((item) => (
                <li key={item.id}>
                  <Link to={`/Detail/search/${query}`}>
                    {item.poster_path !== null ? (
                      <img
                        src={`${API_BASE_IMAGE_URL}w342${item.poster_path}`}
                        alt="{item.title}"
                      />
                    ) : (
                      <h1>ops</h1>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </Container>
    </>
  );
};

export default Search;
