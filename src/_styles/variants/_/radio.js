import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../../../theme";

export const Radio = defineStyleConfig({
  baseStyle: {
    commonStyle: {
      box: {
        p: { base: 4, md: 5 },
        rounded: "0.625rem",
        w: "100%",
        h: "100%",
        fontWeight: "bold",
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
    activeStyle: {
      bg: colors.orange,
      borderColor: colors.black,
      checkbg: colors.black,
    },
    noActiveStyle: {
      bg: colors.black,
      checkbg: colors.white,
    },
  },
  variants: {
    disabled: {
      commonStyle: {
        box: {
          bg: "#ccc",
        },
      },
      noActiveStyle: {
        borderColor: "#ccc",
      },
      color: "#666",
      cursor: "not-allowed",
      pointerEvents: "none",
    },
    normal: {
      noActiveStyle: {
        borderColor: colors.black,
      },
      color: colors.white,
    },
    checked: {
      color: colors.black,
    },
  },
  // The default variant value
  defaultProps: {
    variant: "normal",
  },
});
