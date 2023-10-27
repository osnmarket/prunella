import React from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { SocialButton } from "../../common";
import * as fa from "react-icons/fa";

export const FollowUs = ({ payload, color }) => {
  return (
    <HStack>
      <Box>
        <Heading fontSize={"1.5rem"} color={color}>
          {"Retrouvez "}
        </Heading>
      </Box>
      <HStack alignItems={"flex-start"}>
        {payload.map(({ pl, icon, defaultStyling }) => (
          <SocialButton
            {...{
              pl,
              icon,
              defaultStyling,
            }}
          />
        ))}
      </HStack>
    </HStack>
  );
};

FollowUs.defaultProps = {
  payload: [
    {
      pl: 0,
      icon: <fa.FaFacebookF />,
      defaultStyling: {
        size: "sm",
        variant: "unstyle",
        color: "black",
      },
    },
    {
      pl: 0,
      icon: <fa.FaInstagram />,
      defaultStyling: {
        size: "sm",
        variant: "unstyle",
        color: "black",
      },
    },
    {
      pl: 0,
      icon: <fa.FaGooglePlus />,
      defaultStyling: {
        size: "sm",
        variant: "unstyle",
        color: "black",
      },
    },
  ],
  color: "black",
};
