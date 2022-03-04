import * as React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
} from '@chakra-ui/react';

interface CommonModalProps {
  header?: string;
  isShow: boolean;
  handleClose: () => any;
  children?: React.ReactNode;
}

export function CommonModal(props: CommonModalProps) {
  const onModalClose = () => {
    props.handleClose();
  };

  return (
    <Modal
      isOpen={props.isShow}
      onClose={onModalClose}
      isCentered
      motionPreset="slideInBottom"
      variant="dark"
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        {props.header && (
          <ModalHeader>
            <Center>{props.header}</Center>
          </ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody>{props.children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
