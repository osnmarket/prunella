import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {componentStyles} from "./src/_styles/variants";
import "swiper/css";

const theme = extendTheme({
    colors,
    components: {...componentStyles},
    fonts: {
        heading: `HelveticaNeueLTStd-Bd, sans-serif`,
        body: ` HelveticaNeueLTStd-Bd, sans-serif`,
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>

        </ChakraProvider>
    </React.StrictMode>
);
