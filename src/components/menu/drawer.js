import React from "react";
import { Stack, StackDivider, VStack } from "@chakra-ui/react";
import { IndicatorMenuList } from "./index";
import { CustomDrawer } from "../drawer";
import { PropTypes } from "prop-types";

export const MobileDrawer = ({
  active,
  isOpen,
  onClose,
  mainMenu,
  borderColor
}) => {
  return (
    <CustomDrawer
      closeOnEsc
      isFullHeight
      {...{
        onClose,
        isOpen
      }}
      size={"full"}
      placement={"right"}
      heading={
        <Stack
          divider={
            <StackDivider borderColor={borderColor} borderStyle={"dashed"} />
          }
        ></Stack>
      }
    >
      <VStack
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        pos={"relative"}
        h={"100%"}
      >
        <IndicatorMenuList payload={mainMenu} active={active} />
      </VStack>
    </CustomDrawer>
  );
};

MobileDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
  active: PropTypes.bool,
  mainMenu: PropTypes.arrayOf()
};
MobileDrawer.defaultProps = {
  mainMenu: [
    {
      title: "Orange Money",
      cta: {
        link: "/"
      }
    },
    {
      title: "Orange et Moi",
      cta: {
        link: "/"
      }
    }
  ],
  active: true,
  isOpen: false,
  onClose: true,
  borderColor: "orange"
};
