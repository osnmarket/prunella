import React from "react";
import { Box, HStack, chakra, useRadio } from "@chakra-ui/react";

export const RadioCard = ({
  activeStyle,
  noActiveStyle,
  commonStyle,
  children,
  ...radioProps
}) => {
  const { state, getInputProps, getRadioProps, htmlProps } =
    useRadio(radioProps);
  return (
    <chakra.label {...htmlProps}>
      <input {...getInputProps({})} />
      <Box
        bg={state.isChecked ? activeStyle.bg : noActiveStyle.bg}
        {...getRadioProps()}
        {...commonStyle.box}
      >
        <HStack>
          <Box
            bordercolor={
              state.isChecked
                ? activeStyle.borderColor
                : noActiveStyle.borderColor
            }
            {...commonStyle.check}
          >
            <Box
              bg={state.isChecked ? activeStyle.checkbg : noActiveStyle.checkbg}
              rounded={commonStyle.check.rounded}
              p={commonStyle.check.p}
            ></Box>
          </Box>
          {children}
        </HStack>
      </Box>
    </chakra.label>
  );
};

RadioCard.defaultProps = {
  commonStyle: {
    box: {
      p: 5,
      rounded: "md"
    },
    check: {
      border: "2px",
      h: "5",
      p: "1",
      rounded: "full",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bg: "#fff"
    },
    activeStyle: {
      bg: "#ff7900",
      borderColor: "black",
      checkbg: "black"
    },
    noActiveStyle: {
      bg: "black",
      borderColor: "#fff",
      checkbg: "#fff"
    }
  }
};
