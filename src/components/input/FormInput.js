import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  Textarea,
  VStack,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import { ErrorMessage } from "formik";
import { FiSearch } from "react-icons/fi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

export const FormInput = ({
  colors,
  select,
  options = [],
  textArea,
  uid,
  label,
  errors,
  placeholder,
  handleChange,
  handleBlur,
  touched,
  type,
  values,
  py,
  pt,
  pb,
  isDisabled,
  passwordTypeToggler,
  secureTextEntry,
  variant,
  h,
}) => {
  const inputProps = {
    bgColor: colors.bgColor,
    color: colors.color,
    name: uid,
    onChange: handleChange,
    onBlur: handleBlur,
    borderColor: colors.borderColor,
    fontcolor: colors.fontColor,
    focusBorderColor: colors.focus,
    placeholder,
    type: type || "text",
    value: values[uid],
    h: h || 50,
    w: "100%",
    isDisabled,
  };
  const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              "div:has(input:not(:placeholder-shown)) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) + label":
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: colors.bgColor,
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top",
              },
            },
          },
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <FormControl
        {...{ pt, pb, py }}
        isInvalid={errors[uid]}
        variant={variant || "floating"}>
        {variant !== "floating" && (
          <FormLabel color={inputProps.color} fontWeight={"bold"}>
            {label}
          </FormLabel>
        )}

        {textArea ? (
          <Textarea p={3} {...inputProps} />
        ) : select ? (
          <Select {...inputProps}>
            {options.map((option, i) => (
              <option value={option.value} key={`${uid}-option-${i}`} id={option.value}>
                {option.name}
              </option>
            ))}
          </Select>
        ) : (
          <Box pos={"relative"} w={"100%"}>
            <Input {...inputProps} />
            {secureTextEntry && (
              <Box
                pos={"absolute"}
                right={"3%"}
                top={"30%"}
                _hover={{ cursor: "pointer" }}
                onClick={passwordTypeToggler}
                zIndex={2}>
                {type == "password" ? (
                  <VscEye color={inputProps.color} size={"1.25rem"} />
                ) : (
                  <VscEyeClosed color={inputProps.color} size={"1.25rem"} />
                )}
              </Box>
            )}
          </Box>
        )}
        {variant === "floating" && (
          <FormLabel color={inputProps.color} fontWeight={"bold"}>
            {label}
          </FormLabel>
        )}
        {errors[uid] && touched[uid] && (
          <FormErrorMessage>{errors[uid]}</FormErrorMessage>
        )}
      </FormControl>
    </ChakraProvider>
  );
};

FormInput.defaultProps = {};

export const FormSubmit = ({
  colors,
  loadingText,
  uid,
  touched,
  errors,
  submit_message,
  handleSubmit,
  isSubmitting,
  pt,
  pb,
  colorScheme,
  color,
  rightIcon,
  leftIcon,
  borderRadius,
  borderWidth,
  h = "3rem",
  style,
}) => {
  return (
    <FormControl {...{ pt, pb, colorScheme }}>
      <Button
        {...{
          rightIcon,
          leftIcon,
        }}
        onClick={handleSubmit}
        colorScheme={colorScheme}
        {...{
          borderWidth,
          borderRadius,
          color,
          h,
        }}
        bgColor={colors.bgColor}
        w={"100%"}
        type={"submit"}
        isDisabled={isSubmitting}
        isLoading={isSubmitting}
        loadingText={loadingText}
        {...style}>
        {submit_message}
      </Button>
      {errors[uid] && touched[uid] && (
        <VStack>
          <ErrorMessage
            style={{ color: colors.error }}
            render={(errorMessage) => (
              <Text color={colors.error}>{errorMessage}</Text>
            )}
            name={uid}
          />
        </VStack>
      )}
    </FormControl>
  );
};

FormSubmit.defaultProps = {};

export const FormSearch = ({
  uid,
  errors,
  colors,
  handleChange,
  handleBlur,
  value,
  isDisabled,
  placeholder,
}) => {
  const inputProps = {
    borderColor: colors.borderColor,
    fontWeight: 500,
    name: uid,
    onChange: handleChange,
    onBlur: handleBlur,
    placeholder,
    value,
    h: "3rem",
    w: "100%",
    isDisabled,
  };

  return (
    <FormControl isInvalid={errors[uid]}>
      <InputGroup>
        <InputLeftElement alignSelf={"center"} h={"100%"} width={"3rem"}>
          <FiSearch size={"1.3rem"} />
        </InputLeftElement>
        <Input {...inputProps} />
      </InputGroup>
    </FormControl>
  );
};

FormSearch.defaultProps = {};
