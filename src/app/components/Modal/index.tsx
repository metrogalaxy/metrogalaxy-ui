import * as React from 'react';
import styled from 'styled-components/macro';
import { Modal as ModalLib } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';

interface ModalProps {
  isShow: boolean;
  title: string;
  onHide?: () => any;
  onExit?: () => any;
  children: any;
}

export const Modal: React.FunctionComponent<ModalProps> = props => {
  return (
    <ModalWrapper
      centered
      show={props.isShow}
      onHide={props.onHide}
      onExit={props.onExit}
    >
      <ModalLib.Header closeButton closeVariant="white">
        <div className="modal-header-text">{props.title}</div>
      </ModalLib.Header>
      <ModalLib.Body>{props.children}</ModalLib.Body>
    </ModalWrapper>
  );
};

const ModalWrapper = styled(ModalLib)`
  .modal-content {
    background: #142433;
    border-radius: 2rem;
  }

  .modal-header {
    font-family: 'Acrom-Bold';
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: ${ColorConstants.WHITE};
    padding: 3rem;
    border: none;
  }

  .modal-header-text {
    width: 100%;
    text-align: center;
  }

  .modal-body {
    padding: 1rem 3rem 3rem;
  }
`;
