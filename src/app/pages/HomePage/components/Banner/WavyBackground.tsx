import * as React from 'react';
import styled from 'styled-components';

export function WavyBackground() {
  return (
    <Wrapper>
      <div className="layer-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 353.71"
          preserveAspectRatio="none"
        >
          <path
            className="shape-fill"
            d="M1920,353.71H0v-216c94.85,46.84,302.94,133,572,110,170.78-14.63,304.09-68,388-110,79.37-46.91,329.23-180.54,643-124,138.74,25,246,79.24,317,124v83"
          />
        </svg>
      </div>
      <div className="layer-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 353.71"
          preserveAspectRatio="none"
        >
          <path
            className="shape-fill"
            d="M1920,353.71H0v-216c94.85,46.84,302.94,133,572,110,170.78-14.63,304.09-68,388-110,79.37-46.91,329.23-180.54,643-124,138.74,25,246,79.24,317,124v83"
          />
        </svg>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .layer-1 {
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -2;
  }

  .layer-1 svg {
    position: relative;
    display: block;
    width: 100%;
    height: 20rem;
  }

  .layer-1 .shape-fill {
    fill: #595959;
  }

  .layer-2 {
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -3;
  }

  .layer-2 svg {
    position: relative;
    display: block;
    width: 100%;
    height: 20rem;
  }

  .layer-2.shape-fill {
    fill: #2f2f2f;
  }
`;
