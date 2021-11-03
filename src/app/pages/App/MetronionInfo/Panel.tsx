import * as React from 'react';
import styled from 'styled-components/macro';
import { Row, Col } from 'react-bootstrap';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { Attributes } from './Attributes';
import { Image } from 'react-bootstrap';
import { useFetchMetronionInfo } from 'src/app/service/API/metronion';
import { PriceBox } from './PriceBox';

interface PanelProps {
  id: string;
}

export function Panel(props: PanelProps) {
  const { data } = useFetchMetronionInfo(props.id, {
    staleTime: 2000,
    suspense: true,
  });

  console.log(data);

  return (
    <Wrapper>
      {data && (
        <Row className="row-layout">
          <Col sm={12} lg={4} className="col-layout">
            <Attributes attributes={data.attributes} />
          </Col>
          <Col sm={12} lg={4} className="col-layout col-layout--image">
            <ImageWrapper src={data.url} />
          </Col>
          <Col sm={12} lg={4} className="col-layout">
            <PriceBox id={props.id} listPrice={data.listPrice} />
          </Col>
        </Row>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .row-layout {
    margin: 0;
  }

  .col-layout {
    padding: 0;
    ${mediaQuery.lessThan(ScreenSize.LG)`
      margin-bottom: 4rem;
    `}
  }

  .col-layout--image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .col-layout-flex {
    ${mediaQuery.greaterThan(ScreenSize.LG)`
      display: flex;
    `}
  }
`;

const ImageWrapper = styled(Image)`
  width: 100%;
  max-width: 32rem;
`;
