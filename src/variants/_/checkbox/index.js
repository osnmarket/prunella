import React from "react";
import {useStyleConfig} from "@chakra-ui/react";
import {CheckboxCard} from "../../../common/_/cards/checkbox";

export const Checkbox = ({children}) => {
    const styles = useStyleConfig("CustomCheckbox");
    return (
        <CheckboxCard
            {...styles}
            {...{
                children,
            }}
        />
    );
};
