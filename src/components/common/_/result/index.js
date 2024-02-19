import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

export const NotFound = ({ cta, message, item, status, onClick }) => {
  return (
    <Box textAlign={"center"} py={10} px={6}>
      <Heading
        display={"inline-block"}
        as={"h2"}
        size={"2xl"}
        bgGradient={"linear(to-r, orange.400, orange.600)"}
        backgroundClip={"text"}
      >
        {status}
      </Heading>
      <Text fontSize={18} mt={3} mb={2}>
        {`${item} Not Found`}
      </Text>
      <Text color={"gray.500"} mb={6}>
        {message}
      </Text>

      <Button
        onClick={onClick}
        colorScheme={"orange"}
        bgGradient={"linear(to-r, orange.400, orange.500, orange.600)"}
        color={"white"}
        variant={"solid"}
      >
        {cta}
      </Button>
    </Box>
  );
};

NotFound.defaultProps = {
  message: "Not Found",
  status: "404",
  cta: "Retour",
};
