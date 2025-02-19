import React, { Fragment } from "react";
import { HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { IconedButton } from "../button";
import { FiEdit } from "react-icons/fi";

export const Recap = ({
  title,
  cta,
  data,
  grid,
  onClick,
  leftIcon,
  message,
}) => {
  const defaultCta = {
    leftIcon: leftIcon || <FiEdit size={"1.5rem"} />,
    message: message || "Modifier",
    onClick: onClick,
    style: {
      colorScheme: "blackAlpha",
      bgColor: "#fff",
      color: "black",
      variant: "outline",
      justifyContent: "center",
      borderWidth: "1px",
      borderRadius: 0,
      p: 4,
      fontSize: "1rem",
      h: "2rem",
    },
  };

  return (
    <Fragment>
      <VStack align="stretch">
        <HStack>
          <Text fontWeight={"bold"} fontSize={"1rem"}>
            {title}
          </Text>
          <IconedButton {...(defaultCta || cta)} />
        </HStack>
        <SimpleGrid {...grid}>
          {data.map(({ title, value }, i) => (
            <HStack key={`item-${i}`}>
              <Text>{title} :</Text>
              <Text fontWeight={"bold"}>{value}</Text>
            </HStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Fragment>
  );
};

Recap.defaultProps = {
  grid: {
    columns: "3",
    spacing: "5",
  },
};
