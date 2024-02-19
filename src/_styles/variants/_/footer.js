import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../../../theme";

export const Footer = defineStyleConfig({
  baseStyle: {
    propsColors: {
      bgColor: colors.primary.regular,
      text: {
        activeTint: colors.white,
      },
    },
    defaultStyling: {
      size: "sm",
      variant: "unstyled",
      color: colors.primary.regular,
      pl: 0,
    },
    stylesMenuButton: {
      color: colors.gray.soft,
      variant: "unstyled",
      fontSize: "1.5rem",
    },
  },
  variants: {},
  // The default variant value
  defaultProps: {
    variant: "",
  },
});
