import * as React from 'react';
import styled from 'styled-components/macro';
import TitleIcon from 'src/app/pages/App/Inventory/assets/arrow.png';
import { Image } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';
import { useHistory } from 'react-router-dom';

export function NotFound() {
  const history = useHistory();

  const onBackToInventoryPage = () => {
    history.push('/inventory');
  };

  return (
    <Wrapper>
      <Box>
        <div>Metronion Not Found</div>
        <div className="not-found--nav-link" onClick={onBackToInventoryPage}>
          <Image src={TitleIcon} className="not-found--nav-img" />
          <div>Back to inventory</div>
        </div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Acrom';
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-transform: capitalize;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  padding-top: 10rem;

  .not-found--nav-link {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    line-height: 1.9rem;
    cursor: pointer;
    color: ${ColorConstants.MAIN_GREEN};
  }

  .not-found--nav-img {
    margin-right: 0.6rem;
  }
`;
