import React from "react";
import { Box, chakra, Flex, useCheckbox , HStack } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const defaultStyle = {
    style: {
        active: {
            bg: "#ff7900",
            color: "#000",
            borderColor: "#000",
        },
        noactive: {
            bg: "#000",
            color: "#fff",
            borderColor: "#000",
        },
        checkStyle: {
            bg: "#fff",
            icon: <FaCheck />,
        },
    },
};
export const CheckboxCard = ({ children, style, ...checkBoxProps }) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
        useCheckbox(checkBoxProps);

    return (
        <chakra.label
            display="flex"
            flexDirection="row"
            alignItems="start"
            gridColumnGap={2}
            {...(style?.active?.bg && style?.noactive?.bg
                ? { bg: state.isChecked ? style?.active?.bg : style?.noactive?.bg }
                : { bg: "#000" })}
            rounded="md"
            p={4}
            cursor="pointer"
            {...htmlProps}
        >
            <input {...getInputProps()} hidden />
            <HStack alignItems={"stretch"}>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    border="2px solid"
                    {...(style?.noactive?.borderColor && style?.noactive?.borderColor
                        ? {
                            borderColor: state.isChecked
                                ? style?.active?.borderColor
                                : style?.noactive?.borderColor,
                        }
                        : { borderColor: "#000" })}
                    borderRadius={"0.3rem"}
                    p={1}
                    w={5}
                    h={5}
                    {...(style?.checkStyle || { bg: "#fff" })}
                    {...getCheckboxProps()}
                >
                    {state.isChecked && style?.checkStyle.icon}
                </Flex>
                <Box
                    color={
                        state.isChecked ? style?.active?.color : style?.noactive?.color
                    }
                    {...getLabelProps()}
                >
                    {children}
                </Box>
            </HStack>
        </chakra.label>
    );
};

CheckboxCard.defaultProps = {
    ...defaultStyle,
};
