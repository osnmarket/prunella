import React from "react";
import { Button, VStack, Text } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { PropTypes } from "prop-types";

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
        rightIcon,
        leftIcon,
      }}
      {...(!rightIcon &&
        !leftIcon && { rightIcon: <FiArrowRight size={"1.5rem"} /> })}
      {...onClick}
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
    h: "3rem",
  },
  rightIcon: <FiArrowRight size={"1.5rem"} />,
  leftIcon: <FiArrowLeft size={"1.5rem"} />,
  message: "Retour en arriere",
  onClick: {},
};

export const SocialButton = ({
  onClick,
  colorScheme,
  bgColor,
  color,
  message,
  icon,
  variant,
  pl,
  size,
  justifyContent,
}) => {
  return (
    <Button
      leftIcon={icon || <FiArrowLeft size={"1.5rem"} />}
      {...{
        pl,
        justifyContent,
        variant,
        onClick,
        colorScheme,
        bgColor,
        color,
        size,
      }}
      fontSize={"1rem"}
      h={"1.5rem"}
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

export const AvisButton = ({
  bgColor,
  icon,
  message,
  h,
  p,
  iconSize,
  textSize,
  externe,
}) => {
  return externe ? (
    <VStack>
      <Button
        {...{
          bgColor,
          p,
        }}
        fontSize={iconSize || "3rem"}
        h={h || "auto"}
      >
        {icon}
      </Button>
      <Text fontSize={textSize}>{message}</Text>
    </VStack>
  ) : (
    <Button
      {...{
        bgColor,
        p,
      }}
      h={h || "auto"}
    >
      <VStack>
        <Text fontSize={iconSize}>{icon}</Text>
        <Text fontSize={textSize}>{message}</Text>
      </VStack>
    </Button>
  );
};

AvisButton.propTypes = {
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  message: PropTypes.string,
  h: PropTypes.string,
  p: PropTypes.string,
  fontSize: PropTypes.string,
  externe: PropTypes.bool,
};

AvisButton.defaultProps = {
  bgColor: "#eeeeee",
  message: "Decevant",
  icon: "ðŸ¥°",
  p: "1rem",
  iconSize: "3rem",
  textSize: "1rem",
  externe: false,
};
