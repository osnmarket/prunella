import React, { Fragment } from "react";
import { Bubble } from "../bubble";
import { Text } from "@chakra-ui/react";

export const ChatBubbleWithAnswer = ({ message, variant, children }) => {
  return (
    <Fragment>
      <Bubble variant={variant}>
        <Text w="100%">{message}</Text>
      </Bubble>
      {children}
    </Fragment>
  );
};
