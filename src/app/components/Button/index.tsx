import { ColorConstants } from 'src/styles/StyleConstants';
import styled from 'styled-components/macro';

export const PrimaryButton = styled.div`
  font-family: 'Acrom-Bold';
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.4rem;
  background: ${ColorConstants.MAIN_GREEN};
  /* border: 3px solid rgba(255, 255, 255, 0.18); */
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.25);
  border-radius: 10rem;
  padding: 2rem 4.8rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);
  }
`;

export const DisabledButton = styled.div`
  font-family: 'Acrom-Bold';
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.4rem;
  background: #4d5966;
  color: ${ColorConstants.WHITE};
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.25);
  border-radius: 10rem;
  padding: 2rem 3.8rem;
  cursor: pointer;
  text-align: center;
`;

export const OutlineButton = styled.button`
  font-family: 'Acrom';
  font-size: 2rem;
  line-height: 2.4rem;
  text-transform: capitalize;
  background-color: transparent;
  color: ${ColorConstants.MAIN_GREEN};
  border: 2px solid ${ColorConstants.MAIN_GREEN};
  border-radius: 10rem;
  padding: 1.5rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: ${ColorConstants.MAIN_GREEN};
    color: ${ColorConstants.PRIMARY_BLACK};
    border-color: transparent;
  }
`;
