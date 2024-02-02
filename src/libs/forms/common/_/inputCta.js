import {
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export const InputCta = ({
  errors,
  handleBlur,
  handleChange,
  placeholder,
  isValid,
  values,
  touched,
  handleSubmit,
  uid,
}) => {
  return (
    <HStack>
      <FormControl isInvalid={errors[uid]}>
        <InputGroup size={"lg"}>
          <Input
            {...{
              onBlur: handleBlur,
              onChange: handleChange,
              name: uid,
              placeholder: placeholder || label,
              focusBorderColor: isValid ? "#000" : "#c9c9c9",
              value: values[uid],
              _placeholder: { color: "#000", fontSize: "1rem", opacity: "0.5" },
              fontWeight: "bold",
            }}
          />

          <InputRightElement
            bgColor={isValid ? "#000" : "#c9c9c9"}
            onClick={() => {
              if (isValid) handleSubmit();
            }}
            width={"4rem"}
            display={"flex"}
            justifyContent={"center"}
            borderEndRadius={"0.5rem"}
          >
            <FaArrowRight color={isValid ? "#fff" : "#5b5b5b"} />
          </InputRightElement>
        </InputGroup>
        {errors[uid] && touched[uid] && (
          <FormErrorMessage>{errors[uid]}</FormErrorMessage>
        )}
      </FormControl>
    </HStack>
  );
};
