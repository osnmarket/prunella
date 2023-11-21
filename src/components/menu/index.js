import React from "react";
import { HStack, Stack } from "@chakra-ui/react";
import { MenuLink } from "./link";

export const BasicMenuList = ({
  colors,
  active,
  activeTint,
  inactiveTint,
  dark,
  desktop,
  payload,
  borderHeight,
  withIndicator,
}) => {
  return (
    <HStack alignItems={"center"} gap={".81rem"} py={".1rem"}>
      {payload.map(({ title, cta: { link } }, i) => (
        <MenuLink
          active={active == i}
          {...{
            colors,
            activeTint,
            inactiveTint,
            withIndicator,
            dark,
            title,
            link,
            desktop,
            borderHeight,
          }}
          key={`top-menu-${i}`}
        />
      ))}
    </HStack>
  );
};

export const IndicatorMenuList = ({ paylozad, active, colors, desktop }) => {
  return (
    <Stack alignItems={"flex-start"} gap={"2rem"} py={".1rem"}>
      {payload.map(({ title, cta: { link } }, i) => (
        <MenuLink
          withIndicator
          active={active == i}
          {...{ title, link, desktop, colors }}
          key={`top-menu-${i}`}
        />
      ))}
    </Stack>
  );
};
