import React from "react";
import { HStack, Stack } from "@chakra-ui/layout";
import { MenuLink } from "../../common";

export const BasicMenuList = ({
  active,
  activeTint,
  inactiveTint,
  dark,
  payload,
  borderHeight,
}) => {
  return (
    <HStack alignItems={"center"} gap={".81rem"} py={".1rem"}>
      {payload.map(({ title, cta: { link } }, i) => (
        <MenuLink
          active={active == i}
          {...{
            activeTint,
            inactiveTint,
            dark,
            title,
            link,
            desktop: true,
            borderHeight,
          }}
          key={`top-menu-${i}`}
        />
      ))}
    </HStack>
  );
};

export const IndicatorMenuList = ({ payload, active }) => {
  return (
    <Stack alignItems={"flex-start"} gap={"2rem"} py={".1rem"}>
      {payload.map(({ title, cta: { link } }, i) => (
        <MenuLink
          withIndicator
          active={active == i}
          {...{ title, link }}
          key={`top-menu-${i}`}
        />
      ))}
    </Stack>
  );
};

export const IndicatorTabList = ({ payload, active }) => {
  return (
    <Stack alignItems={"flex-start"} gap={"2rem"} py={".1rem"}>
      {payload.map(({ title, cta: { link } }, i) => (
        <MenuLink
          withIndicator
          active={active == i}
          {...{ title, link }}
          key={`top-menu-${i}`}
        />
      ))}
    </Stack>
  );
};

export const DevBasicMenuList = ({
  payload,
  active,
  borderHeight,
  activeTint,
  inactiveTint,
}) => {
  return (
    <BasicMenuList
      dark
      {...{
        borderHeight,
        active,
        payload,
        activeTint,
        inactiveTint,
      }}
    />
  );
};

DevBasicMenuList.defaultProps = {
  borderHeight: 1,
};
