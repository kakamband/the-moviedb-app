import React from 'react';

import Header from '../../components/Header';

import {
  Container,
  Box,
  Content,
  ContentText,
  About,
  ContentButton,
  ContentImg,
} from './styles';

const Detail: React.FC = () => {
  return (
    <Container>
      <Header />
      <Box>
        <Content>
          <ContentText>
            <h1>Title</h1>
            <h3>Description</h3>
            <About>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, numquam. Quis omnis veritatis harum iure voluptates
              doloremque ducimus animi tempora! Placeat, dolorem impedit error
              quidem dignissimos repellendus ad voluptas at. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Recusandae saepe
              perspiciatis delectus odio repellat officiis veniam iste cum
              expedita dolor nihil atque tempore sit ipsa nemo, reprehenderit
              similique molestias possimus!
            </About>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              at iste eius ex exercitationem expedita, voluptatum veniam,
              molestiae, accusantium sed optio tenetur. Sint at dolorem animi
              illo debitis impedit ut!
            </p>
          </ContentText>
          <ContentButton>
            <button>Whatch Movie</button>
          </ContentButton>
        </Content>

        <ContentImg>
          <img src="http://placekitten.com/g/600/600" alt="" />
        </ContentImg>
      </Box>
    </Container>
  );
};

export default Detail;
