import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";

export const NavBreadcrumb = ({
  spacing,
  separator,
  crumbs,
  fontSize,
  fontWeight,
  bgColor,
  textColor,
  pl,
}) => {
  return (
    <Breadcrumb {...{ spacing, separator, bgColor, pl }}>
      {crumbs.map(({ title, link }, i) => (
        <BreadcrumbItem key={`crumb-${title}-${i}`} height={"3.125rem"}>
          <BreadcrumbLink
            {...{ fontSize, fontWeight, textColor }}
            href={link || "#"}
          >
            {title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

NavBreadcrumb.defaultProps = {
  crumbs: [
    {
      title: "Start",
      link: "#",
    },
    {
      title: "Internet et fixe",
      link: "#",
    },
  ],
  bgColor: "black",
  textColor: "white",
  separator: <FiChevronRight color="white" />,
  spacing: "10px",
  pl: "1rem",
};
