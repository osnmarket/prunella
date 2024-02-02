import React from "react";
import { Box, Heading, Stack, Text, Link } from "@chakra-ui/react";

export const FooterColumn = ({ menu, submenu, colors }) => {
  return (
    <Stack gap={{ base: 2, lg: 4 }}>
      <Box>
        {menu && (
          <Heading fontSize={"1rem"} color={colors.heading}>
            {menu}
          </Heading>
        )}
      </Box>
      <Box>
        {submenu?.map((sub, i) => (
          <Text color={colors.text} key={i} lineHeight={"2rem"}>
            <Link
              href={sub?.link}
              fontSize={"1rem"}
              color={colors.link}
              _active={
                colors.active
                  ? {
                      color: colors.active,
                    }
                  : {}
              }
            >
              {sub?.message}
            </Link>
          </Text>
        ))}
      </Box>
    </Stack>
  );
};

FooterColumn.defaultProps = {};
