import * as React from 'react';
import styled from 'styled-components/macro';
import { Figure as FigureLib } from 'react-bootstrap';
import { Layout } from 'src/app/components/Layout';
import { Title, SubTitle as SubTitleLib } from 'src/app/components/Title';
import { PrimaryButton as PrimaryButtonLib } from 'src/app/components/Button';
import LandImg from './assets/land-min.png';
import { useHistory } from 'react-router-dom';

export function Land() {
  const history = useHistory();
  const onNavigateLandPage = () => {
    history.push('/land');
  };

  return (
    <Layout>
      <Background />
      <Title data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
        Land
      </Title>
      <SubTitle
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Own your private land, then set it up in style.
      </SubTitle>
      <Figure
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <Figure.Image className="figure--image" src={LandImg} />
      </Figure>
      <PrimaryButton
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="350"
        onClick={onNavigateLandPage}
      >
        Buy your own land
      </PrimaryButton>
    </Layout>
  );
}

const Background = styled.div`
  background-color: #3b8661;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -3;
    background: #3b8661;
    transform-origin: bottom left;
    -ms-transform: skewY(3deg);
    -webkit-transform: skewY(3deg);
    transform: skewY(3deg);
  }
`;

const Figure = styled(FigureLib)`
  margin: 8rem 0;

  .figure--image {
    border-radius: 2rem;
  }
`;

const SubTitle = styled(SubTitleLib)`
  max-width: 100rem;
`;

const PrimaryButton = styled(PrimaryButtonLib)`
  margin-bottom: 5rem;
`;
