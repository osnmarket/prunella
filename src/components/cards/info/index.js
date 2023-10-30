import React from "react";
import PropTypes from "prop-types";
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

InfoCard.propTypes = {
  children: PropTypes.element,
  cardStyle: PropTypes.shape({
    bg: PropTypes.string,
    rounded: PropTypes.string,
    w: PropTypes.string.isRequired,
    bgImage: PropTypes.string,
    bgPosition: PropTypes.string,
    bgRepeat: PropTypes.string
  }),
  bodyStyle: PropTypes.shape({
    p: PropTypes.string,
    display: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    flexDirection: PropTypes.string,
    gap: PropTypes.string
  }),
  iconStyle: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    h: PropTypes.string.isRequired
  })
};

InfoCard.defaultProps = {
  cardStyle: {
    bg: "#FFF6B6",
    rounded: 7,
    w: "300px"
  },

  children: (
    <Text>View a summary of all your customers over the last month.</Text>
  ),
  iconStyle: {
    alt: "check",
    src: "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/7B3EE0F5-3F2C-4C9A-A0D5-285F8C8F7A88.svg",
    height: "40px"
  }
};
