import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import HomepageImg from './assets/homepage.png';

export function NotFoundPage() {
  const history = useHistory();

  const onBackToHome = () => {
    history.push('/');
  };

  return (
    <div>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <div className="title">
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <div className="sub-title">Page not found</div>
        <div className="back-to-home" onClick={onBackToHome}>
          <Image src={HomepageImg} className="back-to-home--img" />
          <div className="text">Back to home</div>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;

  .title {
    font-size: 6rem;
    margin-bottom: 1rem;
  }

  .sub-title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .back-to-home {
    display: flex;
    flex-direction: row;

    &--img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.6rem;
    }
  }
`;
