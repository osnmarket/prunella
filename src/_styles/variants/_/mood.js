import {defineStyleConfig} from "@chakra-ui/react";
import {colors} from "../../../theme";

export const Mood = defineStyleConfig({
    baseStyle: {
        style: {
            bgColor: "#eeeeee",
            p: "1rem",
            fontSize: {base: "1.5rem", md: "3rem"},
            h: {base: "3rem", md: "auto"},
            w: {base: "2.8rem", md: "6rem"},
            _focus: {
                bg: colors.orange,
                borderColor: colors.orange,
            },
            _hover: {
                bg: colors.orange,
            },
        },
    },
    variants: {
        noActive: {
            style: {
                bgColor: "#eeeeee",
            },
        },
        active: {
            style: {
                bgColor: colors.orange,
            },
        },
    },
    // The default variant value
    defaultProps: {
        variant: "",
    },
});
