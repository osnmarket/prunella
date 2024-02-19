import { defineStyleConfig } from "@chakra-ui/react";
import { colors, images } from "../../../theme";

export const Header = defineStyleConfig({
  baseStyle: {
    brandLogo: images.logo.variant.desktop,
    propsColors: {
      text: {
        activeTint: colors.black,
        inactiveTint: colors.primary.black,
      },
    },
  },
  variants: {},
  // The default variant value
  defaultProps: {
    variant: "",
  },
});
