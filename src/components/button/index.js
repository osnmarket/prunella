import React from "react";
import { Button, VStack, Text } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const IconedButton = ({
  onClick,
  style,
  message,
  rightIcon,
  leftIcon,
}) => {
  return (
    <Button
      {...{
        onClick,
        leftIcon,
        rightIcon,
      }}
      {...(!rightIcon &&
        !leftIcon && { rightIcon: <FiArrowRight size={"1.5rem"} /> })}
      {...style}
    >
      {message}
    </Button>
  );
};

export const SocialButton = ({ onClick, style, message, leftIcon }) => {
  return (
    <Button
      {...style}
      {...{
        onClick,
        leftIcon,
      }}
    >
      {message}
    </Button>
  );
};

export const BackToHome = ({ onClick, cta, leftIcon }) => {
  return (
    <Button
      leftIcon={leftIcon || <FiArrowLeft size={"1.5rem"} />}
      colorScheme={"transparent"}
      variant={"ghost"}
      fontSize={"1rem"}
      h={"1.5rem"}
      pl={0}
      onClick={onClick}
    >
      {cta || "Retour vers l'accueil du portail"}
    </Button>
  );
};

export const ReactionButton = ({ onClick, style, icon, message }) => {
  return (
    <>
      <VStack display={{ base: "block", md: "none" }}>
        <Button {...style} onClick={onClick}>
          {icon.value}
        </Button>
        <Text {...message.style}>{message.value}</Text>
      </VStack>

      <Button
        {...style}
        onClick={onClick}
        display={{ base: "none", md: "block" }}
      >
        <VStack>
          <Text {...icon.style}>{icon.value}</Text>
          <Text {...message.style}>{message.value}</Text>
        </VStack>
      </Button>
    </>
  );
};
