import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from 'src/app/components/Title';
import { Layout } from 'src/app/components/Layout';
import { Figure as FigureLib } from 'react-bootstrap';
import RoadmapImg from './assets/roadmap.svg';

export function Roadmap() {
  return (
    <Layout>
      <Background />
      <Title>Roadmap</Title>
      <Figure>
        <Figure.Image src={RoadmapImg} />
      </Figure>
    </Layout>
  );
}

const Background = styled.div`
  background-color: #3f3379;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(100% + 30rem);
  position: absolute;
  top: -30rem;
  z-index: -5;
`;

const Figure = styled(FigureLib)`
  margin-top: 8rem;
`;
