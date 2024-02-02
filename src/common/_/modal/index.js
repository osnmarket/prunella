import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button
} from "@chakra-ui/react";

export const ModalCard = ({
  title,
  children,
  footer,
  props,
  overlay,
  withCloseButton
}) => {
  const disclosure = useDisclosure();
  return (
    <>
      {!props && <Button onClick={disclosure.onOpen}>Open Modal</Button>}
      <Modal {...(props || disclosure)}>
        <ModalOverlay {...overlay} />
        <ModalContent>
          {title && <ModalHeader>{title}</ModalHeader>}
          {withCloseButton && <ModalCloseButton />}
          <ModalBody>{children}</ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  );
};
ModalCard.defaultProps = {
  title: "Suivre une demande"
};
