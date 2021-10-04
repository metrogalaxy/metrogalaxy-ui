import styled from 'styled-components/macro';
import BackgroundImg from './assets/background.png';

export const Background = styled.div`
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: -3;
  top: 0;
  left: 0;
  width: 100%;
  height: max(100%, 100vh);
`;

export function LoadingBackground() {
  return (
    <Wrapper>
      <Background />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
