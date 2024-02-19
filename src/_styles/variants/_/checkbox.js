import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../../../theme";
import { FaCheck } from "react-icons/fa";
import React from "react";

export const Checkbox = defineStyleConfig({
  baseStyle: {
    bg: colors.gray.soft,
    p: 5,
    color: colors.black,
    rounded: "0.625rem",
    style: {
      active: {
        color: colors.black,
        borderColor: colors.black,
      },
      noactive: {
        color: colors.black,
        borderColor: colors.black,
      },
      checkStyle: {
        bg: colors.white,
        icon: <FaCheck />,
      },
    },
  },
  variants: {
    normal: {},
    disabled: {
      style: {
        noactive: {
          color: colors.black,
          borderColor: "#ccc",
          bg: "#ccc",
        },
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
    checked: {
      color: colors.black,
    },
  },
  // The default variant value
  defaultProps: {},
});
