import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading
} from "@chakra-ui/react";
import { Fragment } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const AccordionItemCard = ({
  borderWidth,
  borderColor,
  borderRadius,
  my,
  p,
  title,
  desc,
  isExpanded
}) => {
  return (
    <AccordionItem
      {...{
        borderWidth,
        borderColor,
        borderRadius,
        my,
        p
      }}
    >
      {({ isExpanded }) => (
        <AccordionContent
          {...{
            isExpanded,
            title,
            desc
          }}
        />
      )}
    </AccordionItem>
  );
};

export const AccordionContent = ({ isExpanded, title, desc }) => {
  return (
    <Fragment>
      <Heading fontSize={"md"}>
        <AccordionButton _hover={{ bgColor: "transparent" }}>
          <Box as="span" flex="1" textAlign="left">
            <Heading fontSize={"1rem"}>{title}</Heading>
          </Box>
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </AccordionButton>
      </Heading>
      <AccordionPanel pb={4}>{desc}</AccordionPanel>
    </Fragment>
  );
};

export const AccordionList = ({ payload }) => {
  return (
    <Accordion allowToggle>
      {payload.map((accordion, i) => (
        <AccordionItemCard key={`AccordionItemCard-${i}`} {...accordion} />
      ))}
    </Accordion>
  );
};
