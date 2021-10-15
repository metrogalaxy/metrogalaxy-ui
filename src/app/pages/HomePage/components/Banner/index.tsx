import * as React from 'react';
import styled from 'styled-components/macro';
// import { Image as ImageLib } from 'react-bootstrap';
import { PrimaryButton } from 'src/app/components/Button';
import { Title as TitleLib } from 'src/app/components/Title';
import { VideoIntro } from './VideoIntro';
import { WavyBackground } from './WavyBackground';
import BackgroundImage from './assets/homepage_bg-min.png';
// import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';
import ArrowRightIcon from './assets/arrow-right.svg';
import { mediaQuery, ScreenSize } from 'src/styles/media';
// import { FloatingKeyframe } from 'src/styles/animation';
import { useHistory } from 'react-router-dom';

export function Banner() {
  const history = useHistory();

  const onNavigateMetronionPage = () => {
    history.push('/metronion');
  };

  return (
    <Wrapper>
      <TextWrapper>
        <TextWrapperBackground />
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
          onClick={onNavigateMetronionPage}
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
      {/* <Image src={AirBallon} top="10%" left="10%" />
      <Image src={CarLeftOne} top="25%" $delay="1s" $hideOn={ScreenSize.MD} />
      <Image
        src={CarLeftTwo}
        top="50%"
        right="10%"
        $delay="0.5s"
        $hideOn={ScreenSize.MD}
      /> */}
      <WavyBackground />
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
  height: calc(100vh + 30rem);
  min-height: 130rem;
  position: relative;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  position: absolute;
  top: 30%;
  padding: 5rem;
`;

const TextWrapperBackground = styled.div`
  position: absolute;
  background: #0d4a8d;
  opacity: 0.6;
  border-radius: 2rem;
  width: 100%;
  height: 100%;
`;

const Title = styled(TitleLib)`
  & {
    font-family: 'Acrom-Bold';
    text-align: center;
    font-size: 3.6rem;
    line-height: 5.8rem;
    letter-spacing: -0.02em;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 0;
    margin-bottom: 3rem;
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
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -3;

  ${mediaQuery.lessThan(ScreenSize.LG)`
    background-attachment: scroll;
  `}
`;

const Icon = styled.img`
  margin-left: 0.51rem;
`;

// interface ImageProps {
//   top?: string;
//   left?: string;
//   right?: string;
//   $delay?: string;
//   $hideOn?: ScreenSize;
// }

// const Image = styled(ImageLib)<ImageProps>`
//   position: absolute;
//   top: ${p => p.top};
//   left: ${p => p.left};
//   right: ${p => p.right};

//   animation: ${FloatingKeyframe} 3s ease-in-out infinite;
//   animation-delay: ${p => (p.$delay ? p.$delay : '0')};

//   ${p =>
//     p.$hideOn
//       ? mediaQuery.lessThan(p.$hideOn)`
//     display: none;
//   `
//       : ''}
// `;
