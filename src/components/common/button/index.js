import React from "react";
import { Button, VStack, Text } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { PropTypes } from "prop-types";

export const IconedButton = ({
  onClick,
  style,
  message,
  rightIcon,
  leftIcon
}) => {
  return (
    <Button
      {...{
        onClick,
        leftIcon,
        rightIcon
      }}
      {...(!rightIcon &&
        !leftIcon && { rightIcon: <FiArrowRight size={"1.5rem"} /> })}
      {...style}
    >
      {message}
    </Button>
  );
};

IconedButton.defaultProps = {
  style: {
    colorScheme: "orange",
    bgColor: "#fff",
    color: "orange",
    message: "variant",
    variant: "outline",
    justifyContent: "center",
    borderWidth: "2px",
    fontSize: "1rem",
    h: "3rem"
  },
  rightIcon: <FiArrowRight size={"1.5rem"} />,
  leftIcon: <FiArrowLeft size={"1.5rem"} />,
  message: "Retour en arriere",
  onClick: {}
};

export const SocialButton = ({ onClick, style, message, leftIcon }) => {
  return (
    <Button
      {...style}
      {...{
        onClick,
        leftIcon
      }}
    >
      {message}
    </Button>
  );
};

SocialButton.defaultProps = {
  style: {
    colorScheme: "orange",
    bgColor: "#fff",
    color: "orange",
    message: "variant",
    variant: "outline",
    justifyContent: "center",
    fontSize: "1rem",
    size: "lg",
    h: "3rem"
  },
  leftIcon: <FiArrowLeft size={"1.5rem"} />,
  message: "Retour en arriere",
  onClick: {}
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

export const AvisButton = ({ style, icon, message, outMessage }) => {
  return outMessage ? (
    <VStack>
      <Button {...style}>{icon.value}</Button>
      <Text {...message.style}>{message.value}</Text>
    </VStack>
  ) : (
    <Button {...style}>
      <VStack>
        <Text {...icon.style}>{icon.value}</Text>
        <Text {...message.style}>{message.value}</Text>
      </VStack>
    </Button>
  );
};

AvisButton.propTypes = {
  style: PropTypes.shape({
    bgColor: PropTypes.string,
    h: PropTypes.string,
    p: PropTypes.string,
    fontSize: PropTypes.string
  }),
  icon: PropTypes.shape({
    value: PropTypes.string,
    style: PropTypes.shape({})
  }),
  message: PropTypes.shape({
    value: PropTypes.string,
    style: PropTypes.shape({})
  }),
  outMessage: PropTypes.bool
};

AvisButton.defaultProps = {
  style: {
    bgColor: "#eeeeee",
    p: "1rem",
    fontSize: "3rem",
    h: "auto"
  },
  icon: {
    value: "ðŸ¥°",
    style: {
      fontSize: "3rem"
    }
  },
  message: {
    value: "Decevant",
    style: {
      fontSize: "1rem"
    }
  },
  outMessage: false
};
