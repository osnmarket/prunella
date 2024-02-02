import React from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { SocialButton } from "../button";

export const FollowUs = ({ payload, color }) => {
  return (
    <HStack>
      <Box>
        <Heading fontSize={"1.5rem"} color={color}>
          {"Retrouvez "}
        </Heading>
      </Box>
      <HStack alignItems={"flex-start"}>
        {payload.map(({ leftIcon, style }, i) => (
          <SocialButton
            key={`followus-${i}`}
            {...{
              leftIcon,
              style
            }}
          />
        ))}
      </HStack>
    </HStack>
  );
};
FollowUs.defaultProps = {
  color: "#000"
};
