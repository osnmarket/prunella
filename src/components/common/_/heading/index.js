import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const Heading = ({ containerStyle, title, subTitle }) => {
  return (
    <Box {...containerStyle}>
      {title && <Text {...title.style}>{title.text}</Text>}
      {subTitle && <Text {...subTitle.style}>{subTitle.text}</Text>}
    </Box>
  );
};

Heading.defaultProps = {};
