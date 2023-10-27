import React from "react";
import { Heading, Stack } from "@chakra-ui/layout";

export const Teaserheading = ({
  colors,
  color,
  descColor,
  title,
  desc,
  size,
  fontW,
}) => {
  return (
    <Stack gap={"1rem"} maxW={"28rem"}>
      <Heading color={color || colors.title} size={"sm"}>
        {title}
      </Heading>
      <Heading
        color={descColor || colors.desc}
        size={size || "lg"}
        fontWeight={fontW || "bold"}
      >
        {desc}
      </Heading>
    </Stack>
  );
};
