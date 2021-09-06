import { ColorConstants } from 'src/styles/StyleConstants';
import styled from 'styled-components/macro';

export const Title = styled.h1`
  font-family: 'Acrom-Bold';
  font-weight: bold;
  font-style: normal;
  font-size: 4.2rem;
  line-height: 5rem;
  text-transform: capitalize;
  text-align: center;
  color: ${ColorConstants.WHITE};
`;

export const SubTitle = styled.h2`
  font-family: 'Acrom-Light';
  font-style: normal;
  font-size: 2rem;
  line-height: 2.4rem;
  text-align: center;
  color: ${ColorConstants.WHITE};
  margin: 6rem 1rem 0;
`;
