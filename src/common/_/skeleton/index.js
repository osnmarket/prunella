import React from "react";
import { Box, SkeletonText } from "@chakra-ui/react";
import { Fragment } from "react";

export const SkeletonLoading = () => {
  return (
    <Fragment>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </Fragment>
  );
};
