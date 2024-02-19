import { defineStyleConfig } from "@chakra-ui/react";
import { images } from "../../../theme";

export const Stepper = defineStyleConfig({
  baseStyle: {},
  variants: {
    horizontal: {
      separatorStyle: {
        onComplete: "black",
        onInComplete: "#dddddd",
      },
      stepStyle: {
        color: {
          after: "black",
          before: "white",
        },
        onActive: "#ff7900",
        onComplete: "black",
        onInComplete: "#dddddd",
        padding: "0.625rem",
        size: "sm",
      },
    },
    vertical: {
      parentStepStyle: {
        colorScheme: "whiteAlpha",
      },
      childStepStyle: {
        colorScheme: "whiteAlpha",
        onInComplete: images.stepper.sub.incomplete,
        onActive: images.stepper.sub.active,
        onComplete: images.stepper.sub.complete,
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: "vertical",
  },
});
