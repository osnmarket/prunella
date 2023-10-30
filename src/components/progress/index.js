import React from "react";
import { Image, HStack, Progress, ProgressLabel, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { PropTypes } from "prop-types";

export const ProgressBar = ({ label, progress, desc }) => {
  return (
    <Fragment>
      <Progress {...progress}>
        <ProgressLabel {...label.style}>{label.value}</ProgressLabel>
      </Progress>
      {desc && (
        <HStack mt="0.5rem">
          {desc.img && <Image {...desc.img} />}
          <Text>{desc.message}</Text>
        </HStack>
      )}
    </Fragment>
  );
};
ProgressBar.propTypes = {
  label: PropTypes.shape({
    value: PropTypes.string,
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.string
    })
  }),
  progress: PropTypes.shape({
    value: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }),

  desc: PropTypes.shape({
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }),
    message: PropTypes.string
  })
};
ProgressBar.defaultProps = {
  label: {
    value: "En cours",
    style: {
      color: "white",
      fontSize: "1rem"
    }
  },
  progress: {
    value: "60",
    isAnimated: true,
    height: "30px",
    colorScheme: "blue"
  },
  desc: {
    img: {
      src: "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/0A5704E8-B1A2-41B7-8E33-EE06FC3E31F4-optimized.png",
      alt: "En cours",
      h: "5",
      w: "5"
    },
    message: "Intervention de l’équipe sur le terrain"
  }
};
