import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack
  Heading
} from "@chakra-ui/react";
import { Fragment } from "react";

export const AccordionItemCard = ({ style, title, desc, icon, isExpanded }) => {
  return (
    <AccordionItem {...style}>
      {({ isExpanded }) => (
        <AccordionContent
          {...{
            title,
            desc,
            icon,
            isExpanded
          }}
        />
      )}
    </AccordionItem>
  );
};

export const AccordionContent = ({ title, desc, icon, isExpanded , titleIcon }) => {
  return (
    <Fragment>
      <Heading fontSize={"md"}>
        <AccordionButton _hover={{ bgColor: "transparent" }}>
          <HStack gap="1rem">
            {titleIcon &&
              <Box>
              {titleIcon}
            </Box>}
            <Heading fontSize={"1rem"}>{title}</Heading>
          </HStack>
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
