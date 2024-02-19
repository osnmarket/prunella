import React from "react";
import { useStyleConfig } from "@chakra-ui/react";
import { CheckboxCard } from "../../../common/_/cards/checkbox";

export const Checkbox = ({
  children,
  isDisabled,
  useToForm,
  ...checkboxProps
}) => {
  let variant = "normal";
  if (checkboxProps.isChecked) variant = "checked";
  else if (isDisabled) variant = "disabled";
  else if (useToForm) variant = "checked";
  const styles = useStyleConfig("CustomCheckbox", { variant });
  return (
    <CheckboxCard
      {...styles}
      {...{
        children,
      }}
    />
  );
};
