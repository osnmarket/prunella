import React from "react";
import { useStyleConfig } from "@chakra-ui/react";
import { BubbleCard } from "../../../common/_/cards/bubble";

export const Bubble = ({ customStyle, children, variant }) => {
  const styles = useStyleConfig("CustomBubble", { variant });
  return (
    <BubbleCard {...styles} {...customStyle}>
      {children}
    </BubbleCard>
  );
};
