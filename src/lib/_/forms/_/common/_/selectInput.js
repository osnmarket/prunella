import React, { Fragment } from "react";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import Select, { components } from "react-select";

const CustomNoOptionsMessage = (props) => (
  <components.NoOptionsMessage {...props}>
    Pas de résultats
  </components.NoOptionsMessage>
);
export const SelectInput = ({
  isDisabled,
  isLoading,
  isClearable,
  isSearchable,
  handleChange,
  handleBlur,
  isRequired,
  placeholder,
  options,
  uid,
  errors,
  values,
  label,
}) => {
  return (
    <Fragment>
      <FormControl isInvalid={errors?.[uid]} variant={"floating"}>
        <FormLabel
          style={{
            position: "absolute",
            top: "-0.8rem",
            left: "0.5rem",
            background: "#fff",
            zIndex: 2,
            paddingInline: "0.3rem",
            pointerEvents: "none",
            fontSize: "0.8rem",
            mx: 3,
            px: 1,
            my: 2,
            transformOrigin: "left top",
          }}
        >
          {label}
        </FormLabel>
        <Select
          {...{
            styles: {
              control: (provided, state) => ({
                ...provided,
                border: errors[uid]
                  ? "2px solid red"
                  : state.isFocused
                    ? "1px solid #000"
                    : "1px solid #ccc",
                fontWeight: "bold",
                boxShadow: "none",
                height: "3.125rem",
                "&:hover": {
                  border: "2px solid #000",
                },
              }),
              option: (provided, state) => ({
                ...provided,
                background: state.isFocused
                  ? "#363535"
                  : state.isSelected
                    ? "#ddd"
                    : "white",
                color: state.isFocused
                  ? "white"
                  : state.isSelected
                    ? "black"
                    : "black",
                "&:hover": {
                  background: "#363535",
                  color: "white",
                },
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: "#414141",
                zIndex: 3,
              }),
            },
            ...(values[uid] && {
              defaultValue: JSON.parse(values[uid]),
            }),
            ...(isDisabled && { isDisabled: true }),
            ...(isLoading && { isLoading: true }),
            ...(isSearchable && { isSearchable: true }),
            ...(isClearable && { isClearable: true }),
            ...(isRequired && { isRequired: true }),
            onChange: handleChange,
            onBlur: handleBlur,
            name: uid,
            options,
            placeholder,
          }}
          components={{ NoOptionsMessage: CustomNoOptionsMessage }}
        />
        {errors[uid] && <FormErrorMessage>{errors[uid]}</FormErrorMessage>}
      </FormControl>
    </Fragment>
  );
};
