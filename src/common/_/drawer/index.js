import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from "@chakra-ui/react";

export const CustomDrawer = ({
  size,
  placement,
  closeOnEsc,
  isFullHeight,
  onClose,
  isOpen,
  heading,
  children
}) => {
  return (
    <Drawer
      onClose={onClose}
      isOpen={isOpen}
      {...{
        size,
        placement,
        closeOnEsc,
        isFullHeight
      }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{heading}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
