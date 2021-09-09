import * as React from 'react';
import styled from 'styled-components/macro';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Figure as FigureLib } from 'react-bootstrap';
import { Title, SubTitle as SubTitleLib } from 'src/app/components/Title';
import { Layout as LayoutLib } from 'src/app/components/Layout';
import { PrimaryButton } from 'src/app/components/Button';
import { mediaQuery, ScreenSize, ScreenSizeNumber } from 'src/styles/media';
import { importAll } from './utils';

// import all images in the assets directory
const imagesArr = importAll(
  require.context('./assets/', false, /\.(png|jpe?g|svg)$/),
);

export function CharacterContainer() {
  const imgArrComponents = imagesArr.map((item, index) => (
    <Figure key={index}>
      <Figure.Image src={item.path} />
    </Figure>
  ));

  console.log(imgArrComponents);

  const responsive = {
    mobile: {
      breakpoint: { max: ScreenSizeNumber.SM, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 4000, min: ScreenSizeNumber.SM },
      items: 3,
      slidesToSlide: 1,
    },
  };

  return (
    <Layout>
      <Background />
      <Wrapper>
        <Title data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          The Metroverse Citizen
        </Title>
        <SubTitle
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Acquire your own unique avatar, customizable. A character is
          represented by a ERC-721 NFT, acts as digital identity for user in The
          Metroverse.
        </SubTitle>
        <CharacterGrid
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <Carousel
            responsive={responsive}
            swipeable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            {imgArrComponents}
          </Carousel>
        </CharacterGrid>
        <PrimaryButton>Get your own character</PrimaryButton>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled(LayoutLib)`
  margin-top: 30rem;
  ${mediaQuery.greaterThan(ScreenSize.LG)`
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

  ${mediaQuery.greaterThan(ScreenSize.LG)`
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
  margin: 5rem 0rem 10rem;
`;

const Figure = styled(FigureLib)`
  img {
    padding: 0 1rem;
  }
`;

const SubTitle = styled(SubTitleLib)`
  max-width: 100rem;
`;
