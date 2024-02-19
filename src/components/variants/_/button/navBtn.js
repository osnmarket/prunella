import { Stack } from "@chakra-ui/react";
import { Button } from "./";
import React from "react";

export const NavBtn = ({ prevStep, nextStep, customStyle }) => {
  return (
    <Stack direction={"row"} spacing={"1rem"} width={"100%"} {...customStyle}>
      {prevStep && (
        <Button
          onClick={prevStep.onClick}
          message={prevStep.message}
          {...{
            customStyle: {
              isDisabled: prevStep?.isDisabled || false,
            },
          }}
        />
      )}
      {nextStep && (
        <Button
          onClick={nextStep.onClick}
          message={nextStep.message}
          {...{
            customStyle: {
              isDisabled: nextStep?.isDisabled || false,
            },
          }}
        />
      )}
    </Stack>
  );
};
