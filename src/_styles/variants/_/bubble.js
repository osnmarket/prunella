import {defineStyleConfig} from "@chakra-ui/react";
import {colors, images} from "../../../theme";

export const Bubble = defineStyleConfig({
    baseStyle: {
        containerStyle: {
            display: "flex",
            direction: "row",
            alignItems: "end",
            spacing: "1rem",
        },
        cardStyle: {
            minH: {base: "4.5rem", md: "4.5rem"},
            p: {base: "1rem", md: "1.2rem"},
            bg: "#b5e8f7",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            shadow: "none",
        },
        bubbleBorderStyle: {
            h: "18px",
            w: "25px",
            position: "absolute",
            top: {base: "0.7rem", md: 0},
        },
        bubbleStyle: {
            h: "18px",
            w: "25px",
            position: "absolute",
            top: {base: "0.7rem", md: 0},
        },
        clicPathPosition: {
            left: "-0.5rem",
            bottom: "2.5rem",
            zIndex: 0,
        },
    },
    variants: {
        solid: {
            imgStyle: images.assistant,
            bubbleStyle: {
                bg: colors.blue.light,
            },
        },
        outline: {
            imgStyle: images.assistant,
            cardStyle: {
                border: "1px solid black",
                bg: "#fff",
            },
            bubbleBorderStyle: {
                bg: colors.black,
                display: "flex",
            },
            bubbleStyle: {
                display: "flex",
                bg: colors.white,
            },
        },
        solidNoImage: {
            imgStyle: "",
            bubbleStyle: {
                bg: colors.blue.light,
            },
            containerStyle: {
                ml: {base: "3rem", md: "4rem"},
            },
        },
        outlineNoImage: {
            cardStyle: {
                border: "1px solid black",
                bg: "#fff",
            },
            bubbleBorderStyle: {
                bg: colors.black,
                display: "flex",
            },
            bubbleStyle: {
                display: "flex",
                bg: colors.white,
            },
            containerStyle: {
                ml: {base: "3rem", md: "4rem"},
            },
            clicPathPosition: {
                zIndex: 1,
            },
        },
    },
    // The default variant value
    defaultProps: {
        variant: "solid",
    },
});
