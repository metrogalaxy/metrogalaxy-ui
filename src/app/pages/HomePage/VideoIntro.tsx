import * as React from 'react';
import styled from 'styled-components/macro';
import VideoIntroImage from './assets/video_intro.png';
import { Layout as LayoutLib } from 'src/app/components/Layout';
import { mediaQuery, ScreenSize } from 'src/styles/media';

export function VideoIntro() {
  return (
    <Layout
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="900"
      data-aos-once="true"
    >
      <Wrapper>
        <Video />
        <Title>Welcome to the next generation of open world</Title>
        <Content>
          Become anyone, doing anything you like in the open world. Metroverse
          is a gamify NFT social platform for user to socialize, show NFT,
          discover the game and create your own virtual life.
        </Content>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled(LayoutLib)`
  position: absolute;
  bottom: -20rem;

  ${mediaQuery.greaterThan(ScreenSize.LG)`
    bottom: -50rem;
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  height: 100%;
  background: #f3fdff;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  padding: 6rem;

  ${mediaQuery.lessThan(ScreenSize.MD)`
     padding: 3rem;
  `}

  ${mediaQuery.greaterThan(ScreenSize.LG)`
    max-width: 120rem;
    min-width: 100rem;
  `}
`;

const Video = styled.div`
  width: 100%;
  min-height: 50rem;
  background: url(${VideoIntroImage});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2rem;

  ${mediaQuery.lessThan(ScreenSize.SM)`
    min-height: 25rem;
  `}
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #494949;
  margin-top: 4.5rem;
`;

const Content = styled.div`
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #7d7d7d;
`;
