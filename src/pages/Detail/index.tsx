import React, { useState, useEffect } from 'react';
import { API_BASE_IMAGE_URL, getDetail } from '../../services/api';

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

interface ItemParams {
  type: string;
  id: string;
}

interface Item {
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
  release_date: string;
  origin_country: string;
  name: string;
  original_name: string;
  id: number;
}

const Detail: React.FC = () => {
  const [movie, setMovie] = useState<Item>();
  const [serie, setSerie] = useState<Item>();
  const [showVideo, setShowVideo] = useState<Boolean>(false);

  const { params } = useRouteMatch<ItemParams>();

  useEffect(() => {
    async function loadDetail() {
      const detail = await getDetail(params.type, params.id);
      if (params.type === 'movie') setMovie(detail);
      if (params.type === 'tv') setSerie(detail);
    }
    loadDetail();
  }, [params]);

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
