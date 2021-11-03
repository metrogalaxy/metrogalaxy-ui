import * as React from 'react';
import styled from 'styled-components/macro';
import { ColorConstants } from 'src/styles/StyleConstants';

interface ErrorComponentProps {
  error: Error;
  retryHandler: () => any;
}

export function ErrorComponent(props: ErrorComponentProps) {
  return (
    <Wrapper>
      <div>{props.error.message}</div>
      <button onClick={props.retryHandler}>Try Again</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Acrom';
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${ColorConstants.WHITE};
  text-align: center;
`;
