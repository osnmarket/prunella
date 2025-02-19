import React, { Fragment } from "react";
import { HStack, Image, Progress, ProgressLabel, Text } from "@chakra-ui/react";

export const ProgressBar = ({ label, progress, desc }) => {
  return (
    <Fragment>
      <Progress {...progress}>
        <ProgressLabel {...label.style}>{label.value}</ProgressLabel>
      </Progress>
      {desc && (
        <HStack mt="0.5rem">
          {desc.img ? <Image {...desc.img} /> : <>{desc.icon}</>}
          <Text>{desc.message}</Text>
        </HStack>
      )}
    </Fragment>
  );
};

ProgressBar.defaultProps = {
  label: {
    style: {
      color: "white",
      fontSize: "1rem",
    },
  },
};
