import React from "react";
import { RadioCard } from "../../../common/_/cards/radio";
import { Box, HStack, Image, useStyleConfig } from "@chakra-ui/react";

export const Radio = ({
  isDisabled,
  useToForm,
  leftImage,
  leftImageNoActive,
  children,
  message,
  ...radioProps
}) => {
  let variant = "normal";
  if (radioProps.isChecked) variant = "checked";
  else if (isDisabled) variant = "disabled";
  else if (useToForm) variant = "checked";

  const styles = useStyleConfig("CustomRadio", { variant });

  const image = {
    ...(radioProps.isChecked ? leftImage : leftImageNoActive),
  };
  return (
    <RadioCard {...styles} {...radioProps}>
      <HStack>
        {leftImageNoActive && leftImage ? (
          <Image {...image} />
        ) : (
          leftImage && <Image {...leftImage} />
        )}
        <Box color={styles.color}>{children}</Box>
      </HStack>
    </RadioCard>
  );
};
