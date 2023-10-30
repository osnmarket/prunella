import React from "react";
import { PropTypes } from "prop-types";
import { Box, Text } from "@chakra-ui/react";

export const Heading = ({ containerStyle, title, subTitle }) => {
  return (
    <Box {...containerStyle}>
      {title && <Text {...title.style}>{title.text}</Text>}
      {subTitle && <Text {...subTitle.style}>{subTitle.text}</Text>}
    </Box>
  );
};
Heading.propTypes = {
  containerStyle: PropTypes.shape({
    align: "center"
  }),
  title: PropTypes.shape({
    text: PropTypes.string,
    style: PropTypes.shape({
      size: PropTypes.string,
      textTransform: PropTypes.string
    })
  }),
  subTitle: PropTypes.shape({
    text: PropTypes.string,
    tyle: PropTypes.shape({
      fontSize: PropTypes.string,
      pt: PropTypes.string
    })
  })
};

Heading.defaultProps = {
  containerStyle: {
    align: "center"
  },
  title: {
    text: "Summary",
    style: {
      fontSize: "1.5rem",
      textTransform: "uppercase"
    }
  },
  subTitle: {
    text: "View a summary of all your clients over the last month.",
    style: {
      fontSize: "1rem",
      pt: "2"
    }
  }
};
