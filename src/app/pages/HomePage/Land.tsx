import * as React from 'react';
import styled from 'styled-components/macro';
import { Figure as FigureLib } from 'react-bootstrap';
import { Layout } from 'src/app/components/Layout';
import { Title, SubTitle as SubTitleLib } from 'src/app/components/Title';
import { PrimaryButton } from 'src/app/components/Button';
import LandImg from './assets/land.svg';

export function Land() {
  return (
    <Layout>
      <Background />
      <Title>Land</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis
        sollicitudin ultricies. Nam viverra urna quis vulputate pulvinar.{' '}
      </SubTitle>
      <Figure>
        <Figure.Image src={LandImg} />
      </Figure>
      <PrimaryButton>Buy your own land</PrimaryButton>
    </Layout>
  );
}

const Background = styled.div`
  background-color: #3b8661;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(100% + 40rem);
  position: absolute;
  top: -30rem;
  z-index: -3;
  transform: skewY(3deg);
`;

const Figure = styled(FigureLib)`
  margin: 8rem 0;
`;

const SubTitle = styled(SubTitleLib)`
  max-width: 100rem;
`;
