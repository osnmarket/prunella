import React from "react";
import { Link, ListIcon, ListItem } from "@chakra-ui/react";

export const IconedListItem = ({ checkMark, text }) => {
  return (
    <ListItem fontSize={".875rem"} gap={"1rem"}>
      <ListIcon fontSize={"1rem"} as={checkMark} />
      {text}
    </ListItem>
  );
};

export const ClickableListItem = ({ text, link, fontSize, color }) => {
  return (
    <ListItem {...{ fontSize, color }} gap={"1rem"}>
      <Link href={link}>{text}</Link>
    </ListItem>
  );
};

ClickableListItem.defaultProps = {
  fontSize: ".875rem",
  color: "black",
};
