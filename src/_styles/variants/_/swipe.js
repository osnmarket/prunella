import { defineStyleConfig } from "@chakra-ui/react";

export const Swipe = defineStyleConfig({
  baseStyle: {
    container: {
      gap: { base: "0.8rem", md: "1rem" },
      align: "start",
      alignItems: "unset",
    },
  },
  variants: {
    radio: {
      swiper: {
        spaceBetween: 15,
        slidesPerView: 1.3,
      },
    },
    checkbox: {
      swiper: {
        spaceBetween: 25,
        slidesPerView: 1.3,
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: "radio",
  },
});
