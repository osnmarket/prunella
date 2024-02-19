import React from "react";
import { SocialButton } from "../../../common/_/button";
import { useStyleConfig } from "@chakra-ui/react";

export const Button = ({
  message,
  leftIcon,
  onClick,
  customStyle,
  variant,
}) => {
  const styles = useStyleConfig("CustomButton", { variant });
  return (
    <SocialButton
      {...{
        message,
        onClick,
        leftIcon,
        style: {
          ...styles,
          ...customStyle,
        },
      }}
    />
  );
};
