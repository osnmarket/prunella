import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { components } from "react-select";

const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const CaretDownIcon = () => null;

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

export const PlaceAutocomplete = (
  {
    handleChange,
    placeholder,
    id,
    isClearable = true,
    isMulti,
    hasIndicationBar,
    defaultValue,
    required,
    value,
  },
  ref,
) => {
  const indicatorBar = hasIndicationBar
    ? {
        backgroundColor: "#000",
        width: 2,
        marginTop: 4,
        marginBottom: 4,
      }
    : { backgroundColor: "transparent" };
  const [componentLoaded, setComponentLoading] = useState(false);

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  useEffect(() => {
    setComponentLoading(true);
    if (defaultValue) {
      setTimeout(() => setComponentLoading(true), 700);
    }
  }, [defaultValue, value]);

  return !componentLoaded ? (
    <></>
  ) : (
    <Box>
      <GooglePlacesAutocomplete
        autocompletionRequest={{
          bounds: [
            { lat: 50, lng: 50 },
            { lat: 100, lng: 100 },
          ],
          componentRestrictions: {
            country: ["sn"],
          },
        }}
        selectProps={{
          noOptionsMessage: () => "Saisissez votre adresse",
          ...(isClearable && { isClearable: true }),
          ...(isMulti && { isMulti: true }),
          ...(ref && { inputRef: ref }),
          ...(value && {
            value: { label: value, value: value },
          }),
          ...(defaultValue && {
            defaultValue: { label: defaultValue, value: defaultValue },
          }),
          onChange: handleChange,
          components: { Placeholder, DropdownIndicator },
          placeholder: `${placeholder} ${required ? "*" : ""}`,
          id: id,
          styles: {
            dropdownIndicator: (provided, state) => ({
              ...provided,
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              ...indicatorBar,
            }),
            menu: (provided, state) => ({
              ...provided,
              width: "100%",
              backgroundColor: "#000",
              borderRadius: 0,
              color: state.selectProps.menuColor,
              padding: 0,
              margin: 0,
              zIndex: 3,
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: "#000",
              color: "#FFFFFF",
              cursor: "pointer",
              fontFamily: "Helvetica Neue",
              fontSize: "1rem",
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: "#000",
              fontFamily: "Helvetica Neue",
              fontSize: "1rem",
              lineHeight: 1.25,
            }),
            container: (provided, state) => ({
              ...provided,
              backgroundColor: "#fff",
              fontFamily: "Helvetica Neue",
              height: "3rem",
              width: "100%",
              minWidth: "15rem",
            }),
            control: () => ({
              display: "flex",
              paddingLeft: 5,
              border: `1px solid #000`,
              height: "3rem",
            }),
          },
        }}
      />
    </Box>
  );
};
