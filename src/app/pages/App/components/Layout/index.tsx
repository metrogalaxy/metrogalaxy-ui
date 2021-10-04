import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';

export const Layout = styled.div`
  height: 100%;
  padding: 3rem 8rem;
  max-width: 140rem;
  margin: auto;

  ${mediaQuery.lessThan(ScreenSize.SM)`
    padding: 3rem 0 0;
  `}

  ${mediaQuery.between(ScreenSize.SM, ScreenSize.XL)`
    padding: 3rem;
  `}
`;

export { TitleLayout } from './TitleLayout';
