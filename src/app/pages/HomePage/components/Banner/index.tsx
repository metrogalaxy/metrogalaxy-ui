import * as React from 'react';
import styled from 'styled-components/macro';
import { Image as ImageLib } from 'react-bootstrap';
import { PrimaryButton } from 'src/app/components/Button';
import { Title as TitleLib } from 'src/app/components/Title';
import { VideoIntro } from './VideoIntro';
import BackgroundImage from './assets/homepage_bg.png';
import BackgroundTwoImage from './assets/bg_2.png';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';
import ArrowRightIcon from './assets/arrow-right.svg';
import AirBallon from './assets/air_ballon.png';
import CarOne from './assets/car4.png';
import CarTwo from './assets/car5.png';
import { FloatingKeyframe } from 'src/styles/animation';

export function Banner() {
  return (
    <Wrapper>
      <TextWrapper>
        <Title
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          An Decentralized Open World
        </Title>
        <PrimaryButton
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Become The Metroverse Citizen
        </PrimaryButton>
        <SubTitle
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-once="true"
        >
          Read Whitepaper Here
          <Icon src={ArrowRightIcon} />
        </SubTitle>
      </TextWrapper>
      <Background />
      <Image src={AirBallon} top="10%" left="10%" />
      <Image src={CarOne} top="25%" $delay="1s" $hideOn={ScreenSize.MD} />
      <Image
        src={CarTwo}
        top="50%"
        right="10%"
        $delay="0.5s"
        $hideOn={ScreenSize.MD}
      />
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
  font-family: 'Acrom';
  font-size: 1.8rem;
  color: ${ColorConstants.WHITE};
  line-height: 2.2rem;
  margin-top: 3rem;
  cursor: pointer;
`;

const Background = styled.div`
  background-image: url(${BackgroundImage}), url(${BackgroundTwoImage});
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  background-position: center top -1.5rem, center top;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;

  ${mediaQuery.greaterThan(ScreenSize.LG)`
    height: calc(100% + 60rem);
    background-position: center bottom 6rem, center bottom 2rem;
  `}
`;

const Icon = styled.img`
  margin-left: 0.51rem;
`;

interface ImageProps {
  top?: string;
  left?: string;
  right?: string;
  $delay?: string;
  $hideOn?: ScreenSize;
}

const Image = styled(ImageLib)<ImageProps>`
  position: absolute;
  top: ${p => p.top};
  left: ${p => p.left};
  right: ${p => p.right};

  animation: ${FloatingKeyframe} 3s ease-in-out infinite;
  animation-delay: ${p => (p.$delay ? p.$delay : '0')};

  ${p =>
    p.$hideOn
      ? mediaQuery.lessThan(p.$hideOn)`
    display: none;
  `
      : ''}
`;
