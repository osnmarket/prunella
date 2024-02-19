import React from "react";
import {
  Box,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useStyleConfig,
  WrapItem,
} from "@chakra-ui/react";
import { FormInput, InputCta, SelectInput } from "../../common";
import { Field } from "formik";

export const DynamicFormField = ({
  field,
  form,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  eventDispatch,
  updated,
  isValid,
  handleSubmit,
  loading,
}) => {
  const basicStyles = useStyleConfig("Base");
  return (
    ((!updated && field?.show) || (updated && field?.isShow)) &&
    (!field?.isRadio && !field?.select ? (
      <WrapItem w={{ base: "100%", md: "47%" }} {...field?.styles}>
        {form.variant !== "inputCta" ? (
          <FormInput
            {...{
              touched,
              errors,
              handleBlur,
              handleChange,
              values,
              customStyle: {
                fontWeight: "bold",
              },
              ...(field?.textArea && { h: "8.75rem" }),
            }}
            {...field}
            {...(updated && { isDisabled: updated && !field?.isUpdated })}
            variant="floating"
            colors={basicStyles?.input}
          />
        ) : (
          <InputCta
            {...{
              errors,
              handleBlur,
              handleChange,
              isValid,
              values,
              touched,
              handleSubmit,
              ...field,
            }}
          />
        )}
      </WrapItem>
    ) : field.select ? (
      <WrapItem w={{ base: "100%", md: "47%" }} {...field?.styles}>
        <SelectInput
          {...{
            errors,
            handleBlur,
            handleChange: async (selected) => {
              values[field.uid] = JSON.stringify(selected) || null;
            },
            values,
            isClearable: true,
            isSearchable: true,
            isLoading: loading,
          }}
          {...field}
        />
      </WrapItem>
    ) : (
      <WrapItem w={"100%"} {...field?.styles}>
        <Stack
          direction={{ base: "column", md: "row" }}
          w={"100%"}
          alignItems={"start"}
        >
          <Box mr={"3rem"}>
            <Text>{field?.label}</Text>
          </Box>
          <SimpleGrid
            columns={field.columns}
            spacing={{ base: "1.5rem", md: "2rem" }}
          >
            {field?.options.map((option, k) => (
              <HStack key={`${field.uid}-option-${k}`} w={"auto"}>
                <Field
                  type={"radio"}
                  name={field.uid}
                  value={option.value}
                  onClick={() => {
                    values[field.uid] = option.value;
                    eventDispatch({
                      searchField: field,
                      form,
                      values,
                    });
                  }}
                  disabled={updated && !field?.isUpdated}
                />
                <Text>{option.name}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Stack>
      </WrapItem>
    ))
  );
};
