import React, {Fragment} from "react";
import {Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, HStack,} from "@chakra-ui/react";
import {FooterColumn} from "../columnList";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";

export const AccordionItemCard = ({
                                      style,
                                      title,
                                      desc,
                                      icon,
                                      titleIcon,
                                      isExpanded,
                                  }) => {
    return (
        <AccordionItem {...style}>
            {({isExpanded}) => (
                <AccordionContent
                    {...{
                        title,
                        desc,
                        icon,
                        isExpanded,
                        titleIcon,
                    }}
                />
            )}
        </AccordionItem>
    );
};

export const AccordionContent = ({
                                     title,
                                     desc,
                                     icon,
                                     isExpanded,
                                     titleIcon,
                                 }) => {
    return (
        <Fragment>
            <Heading fontSize={"md"}>
                <AccordionButton _hover={{bgColor: "transparent"}}>
                    <HStack justifyContent={"start"} w="100%">
                        <HStack gap="1rem">{titleIcon && <Box>{titleIcon}</Box>}</HStack>
                        <HStack justifyContent={"space-between"} w="100%">
                            <Heading fontSize={"1rem"}>{title}</Heading>
                            {isExpanded && icon ? icon.isExpanded : icon.noExpanded}
                        </HStack>
                    </HStack>
                </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>{desc}</AccordionPanel>
        </Fragment>
    );
};

export const AccordionList = ({payload}) => {
    return (
        <Accordion allowToggle>
            {payload.map((accordion, i) => (
                <AccordionItemCard key={`AccordionItemCard-${i}`} {...accordion} />
            ))}
        </Accordion>
    );
};

export const AccordionMenu = ({payload}) => {
    return (
        <Accordion allowToggle>
            {payload.map((accordion, i) => (
                <AccordionMenuItemCard key={`AccordionItemCard-${i}`} {...accordion} />
            ))}
        </Accordion>
    );
};

export const AccordionMenuItemCard = ({
                                          style,
                                          title,
                                          bellow,
                                          titleIcon,
                                          isExpanded,
                                      }) => {
    return (
        <AccordionItem {...style}>
            {({isExpanded}) => (
                <AccordionMenuContent
                    {...{
                        title,
                        bellow,
                        isExpanded,
                        titleIcon,
                    }}
                />
            )}
        </AccordionItem>
    );
};

export const AccordionMenuContent = ({
                                         title,
                                         bellow,
                                         isExpanded,
                                         titleIcon,
                                     }) => {
    const colorsProps = {
        heading: "#000",
        link: "#000",
        text: "#000",
        active: "#fd7e14",
    };
    return (
        <Fragment>
            <Heading fontSize={"md"}>
                <AccordionButton _hover={{bgColor: "transparent"}}>
                    <HStack justifyContent={"start"} w="100%">
                        <HStack gap="1rem">{titleIcon && <Box>{titleIcon}</Box>}</HStack>
                        <HStack justifyContent={"space-between"} w="100%">
                            <Heading fontSize={"1rem"}>{title}</Heading>
                            {isExpanded ? <BsChevronUp/> : <BsChevronDown/>}
                        </HStack>
                    </HStack>
                </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
                <FooterColumn colors={colorsProps} submenu={bellow}/>
            </AccordionPanel>
        </Fragment>
    );
};
