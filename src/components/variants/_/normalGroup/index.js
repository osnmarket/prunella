import React, { useEffect } from "react";
import {
  SimpleGrid,
  useCheckboxGroup,
  useRadioGroup,
  useStyleConfig,
} from "@chakra-ui/react";
import { Radio } from "../radio";
import { CheckboxCard } from "../../../common/_/cards/checkbox";

export const NormalRadio = ({ radioGroups, variant }) => {
  const constructor = {
    defaultValue: radioGroups?.defaultValue,
    onChange: radioGroups?.handleChange,
  };
  const { getRootProps, getRadioProps, setValue } = useRadioGroup(constructor);
  const styles = useStyleConfig("CustomNormal", { variant });
  useEffect(() => {
    if (radioGroups?.reset) {
      setValue("");
    }
  }, [radioGroups?.reset]);
  return (
    <SimpleGrid
      {...styles.container}
      {...getRootProps()}
      columns={radioGroups?.columns}
    >
      {radioGroups?.radioItems?.map((radioItem, i) => (
        <Radio
          key={`radioItem-${i}`}
          {...radioItem}
          {...styles?.radio}
          {...getRadioProps({ value: radioItem?.uuid?.toString() })}
        />
      ))}
    </SimpleGrid>
  );
};

export const NormalCheckBox = ({ checkboxGroups }) => {
  const { getCheckboxProps } = useCheckboxGroup({
    defaultValue:
      checkboxGroups?.defaultValue?.length > 0
        ? checkboxGroups?.defaultValue
        : [],
    onChange: checkboxGroups?.handleChange,
  });
  const styles = useStyleConfig("CustomNormal");
  return (
    <SimpleGrid {...styles.container} columns={checkboxGroups.columns}>
      {checkboxGroups?.checkboxItems?.map((item, i) => (
        <CheckboxCard
          key={`checkbox-${i}`}
          {...item}
          {...getCheckboxProps({
            value: item?.uuid?.toString(),
            p: { base: 5, md: 5 },
            rounded: "0.625rem",
          })}
        />
      ))}
    </SimpleGrid>
  );
};
