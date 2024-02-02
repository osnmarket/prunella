import React from "react";
import {useStyleConfig} from "@chakra-ui/react";
import {Summary} from "../../../common/_/cards/summary";

export const SubscribeSummary = ({data}) => {
    const styles = useStyleConfig("CustomSummary");
    return (
        <Summary
            {...styles}
            {...{
                data,
            }}
        />
    );
};
