import styled from 'styled-components/macro';
import BackgroundImg from 'src/app/assets/app/background.webp';
import { LoadingSpinner } from 'src/app/components/Loading';

export const Background = styled.div`
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
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
      <div className="loading-bg-fullscreen">
        <LoadingSpinner />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  .loading-bg-fullscreen {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
