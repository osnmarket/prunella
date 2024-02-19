import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../../../theme";

export const Normal = defineStyleConfig({
  baseStyle: {
    container: {
      width: "100%",
      spacing: { base: "0.8rem", md: "0.8rem" },
    },
  },
  variants: {
    normal: {},
    unStyle: {
      radio: {
        activeStyle: {
          checkbg: colors.orange,
          borderColor: colors.orange,
        },
        noActiveStyle: {
          checkbg: colors.white,
          borderColor: colors.black,
        },
        commonStyle: {
          box: {
            rounded: "0.625rem",
            w: "100%",
            h: "100%",
          },
          check: {
            border: "2px",
            h: "5",
            p: "1",
            rounded: "full",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bg: colors.white,
          },
        },
        useToForm: true,
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: "normal",
  },
});
