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

export const AccordionItemCard = ({ style, title, desc, icon, isExpanded }) => {
  return (
    <AccordionItem {...style}>
      <AccordionContent
        {...{
          title,
          desc,
          icon,
          isExpanded
        }}
      />
    </AccordionItem>
  );
};

export const AccordionContent = ({ title, desc, icon, isExpanded }) => {
  return (
    <Fragment>
      <Heading fontSize={"md"}>
        <AccordionButton _hover={{ bgColor: "transparent" }}>
          <Box as="span" flex="1" textAlign="left">
            <Heading fontSize={"1rem"}>{title}</Heading>
          </Box>
          {isExpanded && icon ? icon.isExpanded : icon.noExpanded}
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
