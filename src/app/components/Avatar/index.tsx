import * as React from 'react';
import styled from 'styled-components/macro';
import { Figure } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';

interface AvatarProps {
  avatarUrl: string;
  title: string;
  description: string;
  children?: string;
}

export function Avatar(props: AvatarProps) {
  return (
    <Wrapper>
      <Figure.Image src={props.avatarUrl} />
      <Figure.Caption>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Figure.Caption>
    </Wrapper>
  );
}

const Wrapper = styled(Figure)`
  text-align: center;
  max-width: 28rem;
  margin: 0 3.2rem;
`;

const Title = styled.div`
  font-family: 'Acrom-Light';
  color: ${ColorConstants.WHITE};
  font-size: 2.4rem;
  line-height: 2.9rem;
  margin-top: 2.4rem;
`;

const Description = styled.div`
  font-family: 'Acrom-Light';
  color: ${ColorConstants.WHITE};
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-top: 1rem;
`;
