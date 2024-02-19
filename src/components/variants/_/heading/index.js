import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { colors } from "../../../../theme";

export const HeadingCard = ({ title, rightInfos }) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} gap="0.5rem">
      {title && (
        <Text fontSize={"1.5rem"} fontWeight={"bold"}>
          {title}
        </Text>
      )}
      <Spacer />
      {rightInfos && (
        <Text fontSize={"1.5rem"} fontWeight={"bold"} color={colors.orange}>
          {rightInfos}
        </Text>
      )}
    </Flex>
  );
};
