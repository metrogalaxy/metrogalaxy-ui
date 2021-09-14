import * as React from 'react';
import styled from 'styled-components/macro';
import { Figure } from 'react-bootstrap';
import VideoIntroImage from './assets/video_intro-min.png';
import { Layout as LayoutLib } from 'src/app/components/Layout';
import { mediaQuery, ScreenSize } from 'src/styles/media';

export function VideoIntro() {
  return (
    <Layout data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
      <Wrapper>
        <FigureWrapper>
          <Figure.Image src={VideoIntroImage} />
        </FigureWrapper>
        <TextWrapper>
          <Title>Welcome to the next generation of open world</Title>
          <Content>
            Become anyone, doing anything you like in the open world. Metroverse
            is a gamify NFT social platform for user to socialize, show NFT,
            discover the game and create your own virtual life.
          </Content>
        </TextWrapper>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled(LayoutLib)`
  position: absolute;
  bottom: -30rem;
  min-width: 96rem;
  margin: 0;

  ${mediaQuery.lessThan(ScreenSize.LG)`
    min-width: 0;
    width: 100%
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  /* max-width: 100rem; */
  height: 100%;
  background: #f3fdff;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  padding: 4rem;

  ${mediaQuery.lessThan(ScreenSize.MD)`
     padding: 3rem;
  `}
`;

const TextWrapper = styled.div`
  max-width: 86rem;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #494949;
  margin-top: 3rem;
`;

const Content = styled.div`
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #7d7d7d;
  margin-top: 2rem;
`;

const FigureWrapper = styled(Figure)`
  width: 100%;

  img {
    width: 100%;
  }
`;
