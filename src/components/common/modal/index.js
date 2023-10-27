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
  Button,
} from "@chakra-ui/react";
import { PropTypes } from "prop-types";

export const ModalCard = ({ title, children, footer, props, overlay }) => {
  const disclosure = useDisclosure();
  return (
    <>
      {!props && <Button onClick={disclosure.onOpen}>Open Modal</Button>}
      <Modal {...(props || disclosure)}>
        <ModalOverlay {...overlay} />
        <ModalContent>
          {title && <ModalHeader>{title}</ModalHeader>}
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  );
};
ModalCard.propTypes = {
  props: PropTypes.shape({
    isOpen: PropTypes.bool,
    isClose: PropTypes.bool,
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
  }),
};

ModalCard.defaultProps = {
  title: "Suivre une demande",
  overlay: {
    bg: "blackAlpha.300",
    backdropFilter: "blur(10px) hue-rotate(90deg)",
  },
};
