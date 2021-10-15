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
import { useHistory } from 'react-router-dom';

// import all images in the assets directory
const imagesArr = importAll(
  require.context('./assets/', false, /\.(png|jpe?g|svg)$/),
);

export function CharacterContainer() {
  const history = useHistory();

  const onNavigateMetronionPage = () => {
    history.push('/metronion');
  };

  const imgArrComponents = imagesArr.map((item, index) => (
    <Figure key={index}>
      <Figure.Image src={item.path} />
    </Figure>
  ));

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
          The Metronions
        </Title>
        <SubTitle
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Acquire your own unique Metronion as your digital identity in The
          Metroverse. As The Metroverse’s citizens, The Metronions can do
          amazing things in the open world.
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
        <PrimaryButton
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="350"
          onClick={onNavigateMetronionPage}
        >
          Get your own Metronions
        </PrimaryButton>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled(LayoutLib)`
  margin: 0;
`;

const Background = styled.div`
  background-color: #595959;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -2;
    background: #595959;
    transform-origin: bottom right;
    -ms-transform: skewY(-2deg);
    -webkit-transform: skewY(-2deg);
    transform: skewY(-2deg);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30rem;
  margin-bottom: 10rem;
`;

const CharacterGrid = styled('div')`
  width: 100%;
  height: 100%;
  margin: 5rem 0rem 9rem;

  ${mediaQuery.lessThan(ScreenSize.SM)`
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

const Figure = styled(FigureLib)`
  img {
    padding: 0 1rem;
  }
`;

const SubTitle = styled(SubTitleLib)`
  max-width: 100rem;
`;
