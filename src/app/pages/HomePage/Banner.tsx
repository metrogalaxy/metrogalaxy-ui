import * as React from 'react';
import styled from 'styled-components/macro';
import { PrimaryButton } from 'src/app/components/Button';
import { Title as TitleLib } from 'src/app/components/Title';
import { VideoIntro } from './VideoIntro';
import BackgroundImage from './assets/homepage_bg.png';
import BackgroundTwoImage from './assets/bg_2.png';
import { mediaQuery, ScreenSize } from 'src/styles/media';

export function Banner() {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>An Decentralized Virtual Open World</Title>
        <PrimaryButton>Become The Metroverse Citizen</PrimaryButton>
        <SubTitle>Read Whitepaper Here</SubTitle>
      </TextWrapper>
      <Background />
      <VideoIntro />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 130rem;
  position: relative;
`;

const TextWrapper = styled.div`
  font-family: 'Acrom-Bold';
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
`;

const Title = styled(TitleLib)`
  & {
    font-size: 4.8rem;
    line-height: 5.8rem;
    letter-spacing: -0.02em;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 5rem;
  }
`;

const SubTitle = styled.div`
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 3rem;
  cursor: pointer;
`;

const Background = styled.div`
  background-image: url(${BackgroundImage}), url(${BackgroundTwoImage});
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  background-position: center top -1.6rem, center top;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;

  ${mediaQuery.greaterThan(ScreenSize.LAPTOP)`
    height: calc(100% + 60rem);
    background-position: center top -5rem, center top;
  `}
`;
