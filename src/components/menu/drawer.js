import React from "react";
import { Stack, StackDivider, VStack } from "@chakra-ui/react";
import { IndicatorMenuList } from "./index";
import { CustomDrawer } from "../drawer";

export const MobileDrawer = ({
  colors,
  active,
  isOpen,
  onClose,
  mainMenu,
  borderColor,
  children
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
        <IndicatorMenuList payload={mainMenu} active={active} colors={colors} />
      </VStack>
      {children}
    </CustomDrawer>
  );
};

MobileDrawer.defaultProps = {};
