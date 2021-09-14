import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from 'src/app/components/Title';
import { Layout } from 'src/app/components/Layout';
import { Figure as FigureLib } from 'react-bootstrap';
import RoadmapImg from './assets/roadmap.svg';
import RoadmapMobileImg from './assets/roadmap_mobile.svg';
import { useViewport } from 'src/app/hooks';
import { ScreenSizeNumber } from 'src/styles/media';

export function Roadmap() {
  const { width } = useViewport();

  const isMobile = width <= ScreenSizeNumber.SM;

  return (
    <Layout>
      <Background />
      <Title data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
        Roadmap
      </Title>
      <Figure
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {!isMobile && <Figure.Image src={RoadmapImg} />}
        {isMobile && <Figure.Image src={RoadmapMobileImg} />}
      </Figure>
    </Layout>
  );
}

const Background = styled.div`
  background-color: #3f3379;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
`;

const Figure = styled(FigureLib)`
  margin-top: 5rem;
`;
