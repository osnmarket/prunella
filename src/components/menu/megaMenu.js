import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { BsHeadset, BsShop } from "react-icons/bs";
import {
  FaFacebookF,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { IconedButton } from "../button/index";
import { FollowUs } from "../columnList/followUs";

const defaultStyling = {
  size: "sm",
  variant: "unstyled",
  color: "#000",
  pl: 0,
};

const BurgerMenuItem = ({ title, titleIcon, menuItems, isFirst }) => {
  return (
    <Box
      {...(!isFirst && {
        borderLeft: 1,
        pl: 10,
        borderStyle: "solid",
        borderColor: "#eee",
      })}
      key={`main-menu-${1}`}>
      <Avatar
        name={title}
        src={
          titleIcon ||
          "https://assets.boutique.orange.sn/files/2023-06/tcl-20-SE-new1_333x389_80000f_1.jpg"
        }
      />

      <MenuOptionGroup
        mx={2}
        title={title}
        type={"radio"}
        _hover={{ cursor: "pointer" }}>
        {menuItems}
      </MenuOptionGroup>
    </Box>
  );
};

export const MegaMenu = ({
  title,
  below,
  socialMenus,
  stylesMenuButton,
  rightMenus,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <HStack>
        <MenuButton
          as={Button}
          variant={"unstyled"}
          leftIcon={<BiMenu size={"1rem"} style={{ cursor: "pointer" }} />}
          display={"flex"}
          _hover={{ color: "#f16e00" }}
          _focusVisible={{ border: "unset" }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}>
          {title}
        </MenuButton>
      </HStack>
      <MenuList
        pb={0}
        borderWidth={0.5}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}>
        <Box minW={"100vw"} p={5}>
          <Container maxWidth={"container.xl"}>
            <Grid templateColumns={"repeat(4, 1fr)"} gap={6}>
              {below.map((menu, i) => (
                <BurgerMenuItem
                  key={`menu-${i}`}
                  isFirst={i == 0}
                  {...menu}
                  menuItems={menu.bellow.map((item, j) => (
                    <MenuItem
                      as="a"
                      href={item.link}
                      key={`sub-menu-${item.message}-${j}`}>
                      {item.message}
                    </MenuItem>
                  ))}
                />
              ))}
            </Grid>
          </Container>
        </Box>
        <Box minW={"100vw"} bg="#000" p={"0.625rem"} m={"-1px"}>
          <Container maxWidth={"container.xl"}>
            <Stack direction="row" justifyContent={"space-between"}>
              {rightMenus.map(({ message, leftIcon }, i) => (
                <Box minW={"18rem"}>
                  <IconedButton
                    {...{
                      message,
                      leftIcon,
                    }}
                    style={stylesMenuButton}
                    key={`rightMenu-${i}`}
                  />
                </Box>
              ))}
              <FollowUs color="#fff" payload={socialMenus} />
            </Stack>
          </Container>
        </Box>
      </MenuList>
    </Menu>
  );
};

MegaMenu.defaultProps = {
  stylesMenuButton: {
    color: "#eee",
    variant: "unstyled",
    fontSize: "1.5rem",
  },
  socialMenus: [
    {
      leftIcon: <FaFacebookF color="#fff" size={"1rem"} />,
      style: { ...defaultStyling },
    },
    {
      leftIcon: <FaInstagram color="#fff" size={"1rem"} />,
      style: { ...defaultStyling },
    },
    {
      leftIcon: <FaGooglePlus color="#fff" size={"1rem"} />,
      style: { ...defaultStyling },
    },
    {
      leftIcon: <FaTwitter color="#fff" size={"1rem"} />,
      style: { ...defaultStyling },
    },
    {
      leftIcon: <FaLinkedin color="#fff" size={"1rem"} />,
      style: { ...defaultStyling },
    },
  ],
  rightMenus: [
    {
      leftIcon: <BsHeadset size={"1.5rem"} />,
      message: "Contacter Orange ",
    },
    {
      leftIcon: <SiGooglemaps size={"1.5rem"} />,
      message: "Agences ",
    },
    {
      leftIcon: <BsShop size={"1.5rem"} />,
      message: "Boutiques",
    },
  ],
  below: [],
  title: "Boutique en ligne",
};
