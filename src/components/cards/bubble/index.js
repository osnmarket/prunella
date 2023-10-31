import React from "react";
import { Text, Card, Box, HStack, Avatar } from "@chakra-ui/react";

export const BubbleCard = ({
  children,
  cardStyle,
  imgStyle,
  containerStyle,
  bubbleBorderStyle,
  bubbleStyle,
  display
}) => {
  return (
    <HStack {...containerStyle}>
      {imgStyle && (
        <Box display={display == "left" ? "block" : "none"}>
          <Avatar {...imgStyle} />
        </Box>
      )}
      <HStack w="100%">
        <Box
          position="relative"
          zIndex={2}
          display={display == "left" ? "block" : "none"}
        >
          {bubbleBorderStyle && (
            <Box
              style={{ clipPath: "polygon(50% 25%, 0 50%, 50% 75%)" }}
              left="-4px"
              {...bubbleBorderStyle}
            ></Box>
          )}
          {bubbleStyle && (
            <Box
              style={{ clipPath: "polygon(50% 25%, 0 50%, 50% 75%)" }}
              left="-3px"
              {...bubbleStyle}
            ></Box>
          )}
        </Box>
        <Card flex={1} {...cardStyle}>
          {children}
        </Card>
        <Box
          position="relative"
          zIndex={2}
          display={display == "right" ? "block" : "none"}
        >
          {bubbleBorderStyle && (
            <Box
              style={{ clipPath: "polygon(100% 50%, 50% 25%, 50% 75%)" }}
              right="-4px"
              {...bubbleBorderStyle}
            ></Box>
          )}
          {bubbleStyle && (
            <Box
              style={{ clipPath: "polygon(100% 50%, 50% 25%, 50% 75%)" }}
              right="-3px"
              {...bubbleStyle}
            ></Box>
          )}
        </Box>
      </HStack>
      {imgStyle && (
        <Box display={display == "right" ? "block" : "none"}>
          <Avatar {...imgStyle} />
        </Box>
      )}
    </HStack>
  );
};

BubbleCard.defaultProps = {
  children: <Text>I am text</Text>
};
