import React from "react";
import { isValidElement } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  HStack
} from "@chakra-ui/react";

export const Summary = ({
  containerStyle,
  headerStyle,
  bodyStyle,
  footerStyle,
  data
}) => {
  return (
    <Card {...containerStyle} fontSize={{ base: "1rem" }}>
      <CardHeader {...headerStyle}>
        {isValidElement(data.header) ? data.header : <Text>{data.header}</Text>}
      </CardHeader>

      <CardBody>
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

      <CardFooter>
        <HStack {...footerStyle}>
          {isValidElement(data.footer) ? (
            data.footer
          ) : (
            <>
              <Text> {data.footer.title} </Text>
              <Text> {data.footer.value + " " + data.footer.unit} </Text>
            </>
          )}
        </HStack>
      </CardFooter>
    </Card>
  );
};

Summary.defaultProps = {
  containerStyle: {
    p: 4,
    bg: "#eeeeee"
  },
  headerStyle: {},
  bodyStyle: {
    justifyContent: "space-between"
  },
  footerStyle: {
    justifyContent: "space-between"
  }
};
