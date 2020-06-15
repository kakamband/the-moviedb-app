import React, { useEffect, useState } from 'react';
import api, { API_BASE_IMAGE_URL } from '../../services/api';
import { useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';

import {
  Container,
  Box,
  Content,
  ContentText,
  About,
  ContentButton,
  ContentImg,
  MoreInfo,
} from './styles';
import Player from '../../components/Player';

interface ItensParams {
  movie: string;
  serie: string;
  documentary: string;
}

interface Itens {
  poster_path: string | undefined;
  overview: string | undefined;
  original_language: string;
  original_title: string;
  original_name: string;
  release_date: string;
  first_air_date: string;
  name: string;
  title: string;
  id: number;
}

const Detail: React.FC = () => {
  const [movie, setMovie] = useState<Itens>();
  const [serie, setSerie] = useState<Itens>();
  const [showVideo, setShowVideo] = useState<Boolean>(false);

  const { params } = useRouteMatch<ItensParams>();

  useEffect(() => {
    api.get(`movie/${params.movie}`).then((response) => {
      setMovie(response.data);
    });
  }, [params.movie]);

  useEffect(() => {
    api.get(`tv/${params.serie}`).then((response) => {
      setSerie(response.data);
    });
  }, [params.serie]);

  function handlePlay() {
    setShowVideo(true);
  }

  return (
    <Container>
      <Header />

      {showVideo && <Player />}

      {movie && !showVideo && (
        <Box>
          <Content>
            <ContentText>
              <h1>{movie.title}</h1>
              <h3> {movie.release_date}</h3>
              <About>{movie.overview}</About>
              <MoreInfo>
                <h3>More informations</h3>
                <p>Original language: {movie.original_language}</p>
                <p>Original title: {movie.original_title}</p>
              </MoreInfo>
            </ContentText>
            <ContentButton>
              <button onClick={handlePlay}>Whatch Now</button>
            </ContentButton>
          </Content>

          <ContentImg>
            <img
              src={`${API_BASE_IMAGE_URL}w342${movie.poster_path}`}
              alt="{movie.title}"
            />
          </ContentImg>
        </Box>
      )}

      {serie && !showVideo && (
        <Box>
          <Content>
            <ContentText>
              <h1>{serie.name}</h1>
              <h3> Realiase data {serie.first_air_date}</h3>
              <About>{serie.overview}</About>
              <MoreInfo>
                <h3>More informations</h3>
                <p>Original language: {serie.original_language}</p>
                <p>Original title: {serie.original_name}</p>
              </MoreInfo>
            </ContentText>
            <ContentButton>
              <button onClick={handlePlay}>Whatch Now</button>
            </ContentButton>
          </Content>
          <ContentImg>
            <img
              src={`${API_BASE_IMAGE_URL}w342${serie.poster_path}`}
              alt="{serie.title}"
            />
          </ContentImg>
        </Box>
      )}
    </Container>
  );
};

export default Detail;
