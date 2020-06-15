import React, { useState, FormEvent } from 'react';
import { Section } from '../../styles/shared';

import { getResults } from '../../services/api';

import { Container, Content, Form, Error } from './styles';
import Header from '../../components/Header';
import Media from '../../components/Media';

export interface IResult {
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
  media_type: string;
  id: number;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [inputError, setInputError] = useState('');
  const [result, setResult] = useState<IResult[]>([]);
  const [lastQuery, setLastQuery] = useState('');

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!query) {
      setInputError('To be continue, you need add a Search.');
      return;
    }

    try {
      const searchResult = await getResults(query);
      setResult(searchResult);

      setLastQuery(query);
      setQuery('');
      setInputError('');

      if (searchResult.length === 0) {
        setInputError(`No results found for ${query}`);
      }
    } catch (err) {
      setInputError('Ops, something bad happend.');
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
            <h1>Results for: {lastQuery}</h1>
            <ul>
              {result.map((item) => (
                <li key={item.id}>
                  <Media item={item} type={item.media_type} />
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
