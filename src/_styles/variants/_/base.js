import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../../../theme";

export const Base = defineStyleConfig({
  baseStyle: {
    spacing: {
      base: " 1.5rem",
      md: "2rem",
    },
    input: {
      bgColor: colors.white,
      color: colors.black,
      borderColor: colors.black,
      fontColor: colors.black,
      focus: colors.black,
    },
  },
  variants: {},
  // The default variant value
  defaultProps: {
    variant: "radio",
  },
});
