import { defineStyleConfig } from "@chakra-ui/react";

export const Summary = defineStyleConfig({
  baseStyle: {
    containerStyle: {
      p: 5,
      bg: "#eeeeee",
      gap: 5,
    },
    headerStyle: {
      fontWeight: "bold",
      fontSize: "1rem",
    },
    bodyStyle: {
      justifyContent: "space-between",
    },
    footerStyle: {
      justifyContent: "space-between",
      w: "100%",
      fontWeight: "bold",
      fontSize: "1rem",
    },
  },
  variants: {},
  // The default variant value
  defaultProps: {
    variant: "",
  },
});
