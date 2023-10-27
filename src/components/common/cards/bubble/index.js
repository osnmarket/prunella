import React from "react";
import PropTypes from "prop-types";
import { Text, Card, Box, HStack, Avatar } from "@chakra-ui/react";

export const BubbleCard = ({
  children,
  cardStyle,
  imgStyle,
  containerStyle,
  bubbleBorderStyle,
  bubbleStyle,
  display,
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
BubbleCard.propTypes = {
  children: PropTypes.element,
  imgStyle: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    boxSize: PropTypes.string,
  }),
  containerStyle: PropTypes.shape({
    spacing: PropTypes.string,
  }),
  bubbleBorderStyle: PropTypes.shape({
    style: PropTypes.any.isRequired,
    h: PropTypes.string.isRequired,
    w: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired,
    alignItems: PropTypes.string.isRequired,
  }),
  bubbleStyle: PropTypes.shape({
    style: PropTypes.any.isRequired,
    h: PropTypes.string.isRequired,
    w: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired,
    alignItems: PropTypes.string.isRequired,
  }),
  display: PropTypes.oneOf(["left", "right"]),
  cardStyle: PropTypes.shape({
    bg: PropTypes.string,
    border: PropTypes.string,
  }),
};

BubbleCard.defaultProps = {
  children: (
    <Text>View a summary of all your customers over the last month.</Text>
  ),
  imgStyle: {
    alt: "Dan Abrahmov",
    src: "https://bit.ly/dan-abramov",
    boxSize: "50px",
  },
  bubbleStyle: {
    display: "flex",
    top: "0",
    left: "-4px",
    position: "absolute",
    justifyContent: "end",
    alignItems: "center",
  },
  containerStyle: {
    spacing: "20px",
    alignItems: "end",
  },
  cardStyle: {
    bg: "#b5e8f7",
    border: "1px solid black",
    h: "100px",
    p: 2,
  },
};
