import React from "react";
import { Avatar, Box, Card, HStack } from "@chakra-ui/react";

export const BubbleCard = ({
  children,
  cardStyle,
  imgStyle,
  containerStyle,
  bubbleBorderStyle,
  bubbleStyle,
  clicPathPosition,
  display,
}) => {
  return (
    <HStack {...containerStyle}>
      {imgStyle && (
        <Box display={display == "left" ? "block" : "none"}>
          <Avatar {...imgStyle} />
        </Box>
      )}
      <HStack w="100%" position="relative">
        <Box
          position={"absolute"}
          {...clicPathPosition}
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
          position={"absolute"}
          {...clicPathPosition}
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
  bubbleStyle: {
    h: "18px",
    w: "25px",
    display: "flex",
    bg: "#b5e8f7",
    top: "4",
    position: "absolute",
  },
  clicPathPosition: {
    left: "-8px",
    bottom: "24px",
    zIndex: 2,
  },
  display: "left",
  cardStyle: {
    bg: "#b5e8f7",
    h: "100px",
    p: 2,
  },
  containerStyle: {
    display: "flex",
    alignItems: "end",
  },
};
