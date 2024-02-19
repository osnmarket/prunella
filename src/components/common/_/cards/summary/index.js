import React, { isValidElement } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Summary = ({
  containerStyle,
  headerStyle,
  bodyStyle,
  footerStyle,
  data,
}) => {
  return (
    <Card {...containerStyle} fontSize={{ base: "1rem" }}>
      <CardHeader p={0} {...headerStyle}>
        {isValidElement(data.header) ? data.header : <Text>{data.header}</Text>}
      </CardHeader>

      <CardBody p={0}>
        {isValidElement(data.body) ? (
          data.body
        ) : (
          <Stack>
            {data.body.map((item, i) => (
              <HStack {...bodyStyle} key={`summaryitem-${i}`}>
                <Text>{item.title}</Text>
                <Text>{item.value + " " + item.unit}</Text>
              </HStack>
            ))}
          </Stack>
        )}
      </CardBody>

      <CardFooter p={0}>
        {isValidElement(data.footer) ? (
          data.footer
        ) : (
          <HStack {...footerStyle}>
            <Text> {data.footer.title} </Text>
            <Text> {data.footer.value + " " + data.footer.unit} </Text>
          </HStack>
        )}
      </CardFooter>
    </Card>
  );
};

Summary.defaultProps = {
  containerStyle: {
    p: 4,
    bg: "#eeeeee",
  },
  headerStyle: {},
  bodyStyle: {
    justifyContent: "space-between",
  },
  footerStyle: {
    justifyContent: "space-between",
  },
};
