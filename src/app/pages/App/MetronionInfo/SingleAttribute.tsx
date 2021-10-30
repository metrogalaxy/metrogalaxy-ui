import * as React from 'react';
import styled from 'styled-components/macro';
import { AttributeType } from 'src/app/config/constants';
import { Image } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';

interface SingleAttributeProps {
  id?: string;
  url: string;
  type: AttributeType;
  description: string;
  rarity: number;
}

export function SingleAttribute(props: SingleAttributeProps) {
  return (
    <Wrapper>
      <Image src={props.url} className="single-part--avatar" />
      <div className="single-part--info">
        <div className="single-part--title">{props.type}</div>
        <div className="single-part--description">{props.description}</div>
      </div>
      <div className="single-part--rarity">{props.rarity} %</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.8rem 0 1.2rem;
  border-bottom: 1px dashed #2e3d4d;

  .single-part--avatar {
    width: 4.2rem;
    height: 4.2rem;
  }

  .single-part--info {
    flex-grow: 2;
    font-family: 'Acrom';
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: -0.02em;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .single-part--title {
    color: ${ColorConstants.MAIN_GREEN};
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .single-part--description {
    color: ${ColorConstants.WHITE_SECONDARY};
    text-transform: capitalize;
  }

  .single-part--rarity {
    color: rgba(247, 255, 248, 0.75);
    text-transform: lowercase;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    text-align: right;
  }
`;
