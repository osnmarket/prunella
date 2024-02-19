import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export const InfoCard = ({ children, cardStyle, bodyStyle, iconStyle }) => {
  return (
    <Box {...cardStyle}>
      <Box {...bodyStyle}>
        {iconStyle && <Image {...iconStyle} />}

        {children}
      </Box>
    </Box>
  );
};

InfoCard.defaultProps = {
  children: <Text>I am text</Text>,
};
