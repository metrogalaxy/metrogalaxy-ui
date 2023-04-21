import { keyframes } from 'styled-components/macro';

export const FloatingKeyframe = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 2rem); }
    100%  { transform: translate(0, -0px); }  
`;
