import React from "react";
import { Box, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";

export const SiteHeading = ({ images, sitename, onClick }) => {
  return (
    <HStack
      alignItems={"inherit"}
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {images && <Image {...images} />}
      <Heading fontSize={"1.875rem"} lineHeight={"2rem"}>
        {sitename}
      </Heading>
    </HStack>
  );
};

SiteHeading.defaultProps = {};

export const MenuLink = ({
  colors,
  dark,
  withIndicator,
  active,
  activeTint,
  inactiveTint,
  desktop,
  color,
  link,
  title,
  fontSize,
  fontWeight,
  lineHeight,
  borderHeight,
}) => {
  const def = {
    pos: "absolute",
    bgColor: activeTint || colors.bgColor,
  };

  return (
    <Box position={"relative"}>
      <Link href={link}>
        <Text
          color={inactiveTint || color || colors.text.activeTint}
          {...(dark && {
            color: (!active && inactiveTint) || colors.text.dark,
          })}
          {...(withIndicator && {
            color: active
              ? colors.text.withIndicator
              : colors.text.withIndicator,
          })}
          {...(active && !desktop && { pl: ".5rem" })}
          fontSize={fontSize || "1rem"}
          fontWeight={fontWeight || "medium"}
          lineHeight={lineHeight || "1.5rem"}
        >
          {title}
        </Text>
        {active && desktop && (
          <Box
            {...def}
            h={borderHeight || 0.5}
            w={"100%"}
            bottom={"-1.2rem"}
          ></Box>
        )}
        {active && !desktop && (
          <Box
            {...def}
            h={borderHeight || "1.2rem"}
            w={"2%"}
            top={1}
            let={"-1.2rem"}
          ></Box>
        )}
      </Link>
    </Box>
  );
};

MenuLink.defaultProps = {};
