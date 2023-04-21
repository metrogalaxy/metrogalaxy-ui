import * as React from 'react';
import styled from 'styled-components/macro';

export function LoadingSpinner() {
  return (
    <Wrapper>
      <div className="ldio-mbfjn9fgb1">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
}

const FullScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingSpinnerWrapper = () => {
  return (
    <FullScreenWrapper>
      <LoadingSpinner />
    </FullScreenWrapper>
  );
};

export function LoadingScreen() {
  return (
    <LoadingScreenWrapper>
      <LoadingSpinner />
    </LoadingScreenWrapper>
  );
}

const LoadingScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100px;
  height: 64px;
  display: inline-block;
  overflow: hidden;
  background: none; 
  
  @keyframes ldio-mbfjn9fgb1 {
    0% { transform: translate(6px,40px) scale(0); }
    25% { transform: translate(6px,40px) scale(0); }
    50% { transform: translate(6px,40px) scale(1); }
    75% { transform: translate(40px,40px) scale(1); }
    100% { transform: translate(74px,40px) scale(1); }
  }
  @keyframes ldio-mbfjn9fgb1-r {
    0% { transform: translate(74px,40px) scale(1): }
    100% { transform: translate(74px,40px) scale(0); }
  }
  @keyframes ldio-mbfjn9fgb1-c {
    0% { background: #9af1ad }
    25% { background: #4cbc65 }
    50% { background: #55d071 }
    75% { background: #62e47f }
    100% { background: #9af1ad }
  }
  .ldio-mbfjn9fgb1 div {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(40px,40px) scale(1);
    background: #9af1ad;
    animation: ldio-mbfjn9fgb1 2.5s infinite cubic-bezier(0,0.5,0.5,1);
  }
  .ldio-mbfjn9fgb1 div:nth-child(1) {
    background: #62e47f;
    transform: translate(74px,40px) scale(1);
    animation: ldio-mbfjn9fgb1-r 0.625s infinite cubic-bezier(0,0.5,0.5,1), ldio-mbfjn9fgb1-c 2.5s infinite step-start;
  }.ldio-mbfjn9fgb1 div:nth-child(2) {
    animation-delay: -0.625s;
    background: #9af1ad;
  }.ldio-mbfjn9fgb1 div:nth-child(3) {
    animation-delay: -1.25s;
    background: #62e47f;
  }.ldio-mbfjn9fgb1 div:nth-child(4) {
    animation-delay: -1.875s;
    background: #55d071;
  }.ldio-mbfjn9fgb1 div:nth-child(5) {
    animation-delay: -2.5s;
    background: #4cbc65;
  }

  .ldio-mbfjn9fgb1 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
`;
