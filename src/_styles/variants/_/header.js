import {defineStyleConfig} from "@chakra-ui/react";
import {colors, images} from "../../../theme";

export const Header = defineStyleConfig({
    baseStyle: {
        brandLogo: {
            src: images.themeImages.logo.variant.desktop.src,
            with: images.themeImages.logo.variant.desktop.width,
            height: images.themeImages.logo.variant.desktop.height,
        },
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
