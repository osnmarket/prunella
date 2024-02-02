import React from "react";
import {Button, HStack, Input, Stack, useStyleConfig,} from "@chakra-ui/react";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

export const NumberInputDesktop = ({
                                       input, inc, dec
                                   }) => {
    const styles = useStyleConfig("CustomNumberInput");
    return (
        <HStack {...styles.container}>
            <Input {...input} h={styles.input.h} role={"input"}/>
            <Stack spacing={0} border={styles.border}>
                <Button {...inc} {...styles.btn} role={"buttonInc"}>
                    <FiChevronUp color={styles.color}/>
                </Button>
                <Button {...dec} {...styles.btn} role={"buttonDec"}>
                    <FiChevronDown color={styles.color}/>
                </Button>
            </Stack>
        </HStack>
    );
};
export const NumberInputMobile = ({input, inc, dec}) => {
    const styles = useStyleConfig("CustomNumberInput", {variant: "mobile"});
    return (
        <HStack {...styles.container}>
            <Button
                {...dec}
                {...styles.btn}
                borderRight={styles.border}
                role={"buttonDec"}
            >
                -
            </Button>
            <Input {...input} h={styles.input.h} role={"input"}/>
            <Button
                {...inc}
                {...styles.btn}
                borderLeft={styles.border}
                role={"buttonInc"}
            >
                +
            </Button>
        </HStack>
    );
};
