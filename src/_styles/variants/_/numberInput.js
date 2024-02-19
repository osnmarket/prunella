import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../../../theme";

export const NumberInput = defineStyleConfig({
  baseStyle: {
    color: colors.black,
    border: "1px solid " + colors.black,
    btn: {
      bg: colors.white,
      borderRadius: "0",
    },
    input: {
      bg: colors.white,
      borderRadius: "0",
      focusBorderColor: colors.black,
      border: "none",
      textAlign: "center",
      color: "#000",
    },
  },
  variants: {
    mobile: {
      container: {
        w: "50%",
        mt: "1rem",
        spacing: "0",
        border: "1px solid " + colors.black,
      },
      btn: {
        h: "2.5rem",
        focusBorderColor: colors.black,
        border: "none",
        textAlign: "center",
        color: "#000",
      },
      input: {
        h: "2.5rem",
      },
    },
    desktop: {
      container: {
        w: "40%",
        mt: "1rem",
        spacing: "0",
      },
      btn: {
        h: "1.5rem",
        minW: "0",
        p: 2,
      },
      input: {
        h: "3rem",
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: "desktop",
  },
});
