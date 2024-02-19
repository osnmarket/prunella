import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../../../theme";

const { black, white, orange, gray } = colors;

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 0,
    minW: "10rem",
    borderColor: black,
    border: "2px",
    color: black,
    bgColor: white,
    p: 6,
    _active: {
      bg: orange,
      borderColor: orange,
    },
    _focus: {
      bg: orange,
      borderColor: orange,
    },
    _hover: {
      bg: orange,
      borderColor: orange,
    },
    _disabled: {
      bg: gray.semilight,
      borderColor: gray.semilight,
      cursor: "not-allowed",
      color: gray.semidark,
    },
  },
  variants: {
    dark: {
      bgColor: black,
      color: white,
      w: "100%",
      border: 0,
    },
    small: {
      w: { base: "100%", md: "11.25rem" },
      alignSelf: "start",
      maxW: "15rem",
    },
    large: {
      ml: { base: "3rem", md: "4rem" },
    },
    outline: {
      style: {
        colorScheme: "blackAlpha",
        bgColor: "#fff",
        color: "black",
        variant: "outline",
        justifyContent: "center",
        borderWidth: "1px",
        borderRadius: 0,
        p: 4,
        fontSize: "1rem",
        h: "2rem",
      },
      grid: {
        columns: { base: "1", md: "3" },
        spacing: "5",
        my: "1rem",
      },
    },
    unStyle: {
      style: {
        variant: "unstyle",
        width: "10rem",
        mt: "-1.5rem",
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: "small",
  },
});
