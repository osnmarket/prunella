import React from "react";
import { Stack, StackDivider } from "@chakra-ui/react";
import { CustomDrawer } from "../drawer";

export const MobileDrawer = ({
  //colors,
  //active,
  isOpen,
  onClose,
  //mainMenu,
  borderColor,
  Children,
  //header,
  //footer,
}) => {
  return (
    <CustomDrawer
      closeOnEsc
      isFullHeight
      {...{
        onClose,
        isOpen,
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
      {Children}
      {/*  {header}
      <VStack
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        pos={"relative"}
      >
        <IndicatorMenuList payload={mainMenu} active={active} colors={colors} />
      </VStack>
      {footer} */}
    </CustomDrawer>
  );
};

MobileDrawer.defaultProps = {};
