import { defineStyleConfig } from "@chakra-ui/react";
import { images } from "../../../theme";

export const Infocard = defineStyleConfig({
  baseStyle: {
    cardStyle: {
      bgSize: "cover",
      h: { base: "7rem", md: "12.5rem" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  variants: {
    success: {
      cardStyle: {
        bgImage: images.fieldStudy.successInfo,
        bgSize: "60%",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        border: "solid 1px #32c832",
        borderRadius: "0.625rem",
        px: "0.625rem",
        py: "2rem",
        ml: { base: 0, md: "4rem" },
        h: "100%",
        bgColor: "rgba(50, 200, 50, 0.12)",
      },
    },
    noBg: {
      cardStyle: {
        border: "solid 1px transparent",
        borderRadius: "0.625rem",
        px: "0.625rem",
        py: "2rem",
        h: "100%",
        bgColor: "#e5e5ea",
      },
    },
    failed: {
      cardStyle: {
        bgImage: images.fieldStudy.successInfo,
        bgSize: "60%",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        border: "solid 1px #ff3b30",
        borderRadius: "0.625rem",
        px: "0.625rem",
        py: "2rem",
        ml: { base: 0, md: "4rem" },
        h: "100%",
        bgColor: "rgba(255, 59, 48, 0.12)",
      },
    },
    right: {
      bodyStyle: {
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "flex-start",
        p: 3,
        w: "100%",
      },
      cardStyle: {
        bg: "#4bb4e7",
        bgPosition: "right",
        bgRepeat: "no-repeat",
        h: "100px",
        rounded: 0,
      },
      iconStyle: {
        alt: "check",
        h: "40px",
        mr: "2rem",
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: "",
  },
});
