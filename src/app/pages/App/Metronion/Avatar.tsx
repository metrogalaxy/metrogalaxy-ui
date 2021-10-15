import * as React from 'react';
import styled from 'styled-components/macro';
import { Image } from 'react-bootstrap';
import AvatarImg from './assets/avatar.gif';
import { mediaQuery, ScreenSize } from 'src/styles/media';

export function Avatar() {
  return (
    <Wrapper>
      <Image src={AvatarImg} className="avatar" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .avatar {
    width: 100%;
    max-width: 32rem;
    max-height: 44rem;

    border-radius: 2rem;
  }

  ${mediaQuery.lessThan(ScreenSize.LG)`
    padding: 3rem 0;
  `}

  ${mediaQuery.lessThan(ScreenSize.XXL)`
    .avatar {
      width: 24rem;
    }
  `}
`;
