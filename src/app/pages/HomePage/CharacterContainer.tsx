import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { Row, Col, Carousel } from 'react-bootstrap';
import { Title, SubTitle as SubTitleLib } from 'src/app/components/Title';
import { Layout as LayoutLib } from 'src/app/components/Layout';
import { PrimaryButton } from 'src/app/components/Button';
import CharacterImgLib from './assets/character.png';
import { mediaQuery, ScreenSize, ScreenSizeNumber } from 'src/styles/media';
import { useViewport } from 'src/app/hooks/useViewport';

interface CharacterPanelProps {
  url: string;
  panelColor: string;
}

enum ColorPanel {
  Orange = 'radial-gradient(115% 115% at 14.84% 12.25%, #FF9A2E 0%, #CE7C25 100%)',
  Grey = 'radial-gradient(115% 115% at 14.84% 12.25%, #4B4864 0%, #3D3A51 100%);',
  Green = 'radial-gradient(115% 115% at 14.84% 12.25%, #60A272 0%, #38967F 100%);',
}

const defaultImgArr: CharacterPanelProps[] = [
  {
    url: CharacterImgLib,
    panelColor: ColorPanel.Orange,
  },
  {
    url: CharacterImgLib,
    panelColor: ColorPanel.Grey,
  },
  {
    url: CharacterImgLib,
    panelColor: ColorPanel.Green,
  },
  {
    url: CharacterImgLib,
    panelColor: ColorPanel.Green,
  },
  {
    url: CharacterImgLib,
    panelColor: ColorPanel.Orange,
  },
  {
    url: CharacterImgLib,
    panelColor: ColorPanel.Grey,
  },
];

export function CharacterContainer() {
  const { width } = useViewport();
  const [imgArr, setImgArr] = useState<CharacterPanelProps[]>(defaultImgArr);

  const imgArrComponents = imgArr.map((item, index) => (
    <Carousel.Item key={index}>
      <CharacterPanel bgColor={item.panelColor}>
        <CharacterImg url={item.url} />
      </CharacterPanel>
    </Carousel.Item>
  ));

  const isTablet = width <= ScreenSizeNumber.TABLET;

  return (
    <Layout>
      <Background />
      <Wrapper>
        <Title>The Metroverse Citizen</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis
          sollicitudin ultricies. Nam viverra urna quis vulputate pulvinar.
        </SubTitle>
        {!isTablet && (
          <CharacterGrid>
            <Row>
              <Col>
                <CharacterPanel bgColor={ColorPanel.Orange}>
                  <CharacterImg url={CharacterImgLib} />
                </CharacterPanel>
              </Col>
              <Col>
                <CharacterPanel bgColor={ColorPanel.Grey}>
                  <CharacterImg url={CharacterImgLib} />
                </CharacterPanel>
              </Col>
              <Col>
                <CharacterPanel bgColor={ColorPanel.Green}>
                  <CharacterImg url={CharacterImgLib} />
                </CharacterPanel>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <CharacterPanel bgColor={ColorPanel.Green}>
                  <CharacterImg url={CharacterImgLib} />
                </CharacterPanel>
              </Col>
              <Col>
                <CharacterPanel bgColor={ColorPanel.Orange}>
                  <CharacterImg url={CharacterImgLib} />
                </CharacterPanel>
              </Col>
              <Col>
                <CharacterPanel bgColor={ColorPanel.Grey}>
                  <CharacterImg url={CharacterImgLib} />
                </CharacterPanel>
              </Col>
            </Row>
          </CharacterGrid>
        )}
        {isTablet && <CharacterCarousel>{imgArrComponents}</CharacterCarousel>}
        {/* <CharacterCarousel>{imgArrComponentMobile}</CharacterCarousel> */}
        <PrimaryButton>Get your own character</PrimaryButton>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled(LayoutLib)`
  margin-top: 30rem;
  ${mediaQuery.greaterThan(ScreenSize.LAPTOP)`
    margin-top: 60rem;
  `}
`;

const Background = styled.div`
  background-color: #595959;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(100% + 60rem);
  position: absolute;
  top: -50rem;
  z-index: -2;
  transform: skewY(-5deg);

  ${mediaQuery.greaterThan(ScreenSize.LAPTOP)`
    top: -100rem;
    height: calc(100% + 110rem);
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CharacterGrid = styled('div')`
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  margin-bottom: 10rem;
`;

const CharacterPanel = styled('div')<{ bgColor: string }>`
  min-width: 20rem;
  height: 40rem;
  /* box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.25); */
  border-radius: 20px;
  background: ${p => p.bgColor};
  position: relative;
  padding: 0;
`;

const CharacterImg = styled('div')<{ url: string }>`
  background: url(${p => p.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 80%;
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 2;
`;

// For mobile
const CharacterCarousel = styled(Carousel)`
  & {
    width: 20rem;
    margin: 3rem 0 5rem;
  }
`;

const SubTitle = styled(SubTitleLib)`
  max-width: 100rem;
`;
