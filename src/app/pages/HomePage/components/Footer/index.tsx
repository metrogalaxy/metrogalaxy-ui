import * as React from 'react';
import styled from 'styled-components/macro';
import { Row, Col as ColLib } from 'react-bootstrap';
import { Logo } from 'src/app/components/Logo';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';

export function Footer() {
  return (
    <Layout>
      <Background />
      <Wrapper>
        <BrandWrapper>
          <Logo />
          <Trademark>©Metroverse</Trademark>
        </BrandWrapper>
        <Row>
          <Col>
            <Title>About</Title>
            <Link>Whitepaper</Link>
            <Link>Token Metrics</Link>
          </Col>
          <Col>
            <Title>Social</Title>
            <Link>Telegram</Link>
            <Link>Twitter</Link>
            <Link>Discord</Link>
            <Link>Medium</Link>
          </Col>
          <Col>
            <Title>Resources</Title>
            <Link>Contact Us</Link>
            <Link>Disclaimer</Link>
            <Link>Term of Service</Link>
            <Link>Official Token</Link>
          </Col>
        </Row>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${mediaQuery.greaterThan(ScreenSize.XL)`
    width: 85%;
  `}

  ${mediaQuery.lessThan(ScreenSize.SM)`
    flex-direction: column;
  `}
`;

const Background = styled.div`
  background-color: #3c3c3c;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3rem;
`;

const Trademark = styled.div`
  font-family: 'Acrom-Light';
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${ColorConstants.WHITE};
  opacity: 0.5;
`;

const Title = styled.div`
  font-family: 'Acrom-Light';
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: start;
  color: ${ColorConstants.WHITE};
  margin-bottom: 2rem;
`;

const Link = styled.div`
  cursor: pointer;
  font-family: 'Acrom-Light';
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: start;
  color: ${ColorConstants.WHITE};
  opacity: 0.6;
  margin-bottom: 0.5rem;

  &:hover {
    opacity: 1;
  }
`;

const Col = styled(ColLib)`
  width: 100%;
  min-width: 14rem;
`;
