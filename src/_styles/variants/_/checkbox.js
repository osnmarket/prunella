import {defineStyleConfig} from "@chakra-ui/react";
import {colors} from "../../../theme";
import {FaCheck} from "react-icons/fa/index.esm";
import React from "react";

export const Checkbox = defineStyleConfig({
    baseStyle: {
        bg: colors.gray.soft,
        p: 5,
        color: colors.black,
        rounded: "0.625rem",
        style: {
            active: {
                color: "#000",
                borderColor: "#000",
            },
            noactive: {
                color: "#000",
                borderColor: "#000",
            },
            checkStyle: {
                bg: "#fff",
                icon: <FaCheck/>,
            },
        },
    },
    variants: {},
    // The default variant value
    defaultProps: {},
});
