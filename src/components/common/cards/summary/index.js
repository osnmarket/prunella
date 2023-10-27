import { PropTypes } from "prop-types";
import { isValidElement } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  HStack,
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
      <CardHeader {...headerStyle}>
        {isValidElement(data.header) ? data.header : <Text>{data.header}</Text>}
      </CardHeader>

      <CardBody>
        {isValidElement(data.body) ? (
          data.body
        ) : (
          <Stack>
            {data.body.map((item) => (
              <HStack {...bodyStyle}>
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
Summary.propTypes = {
  containerStyle: PropTypes.shape({
    bg: PropTypes.string,
  }),
  headerStyle: PropTypes.shape({
    w: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  bodyStyle: PropTypes.shape({
    w: PropTypes.string,
    justifyContent: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  footerStyle: PropTypes.shape({
    w: PropTypes.string,
    justifyContent: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  data: PropTypes.shape({
    header: PropTypes.element || PropTypes.string.isRequired,
    body:
      PropTypes.element ||
      PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
          unit: PropTypes.string.isRequired,
        })
      ),
    footer:
      PropTypes.element ||
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      }),
  }),
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
  data: {
    header: "Montant a payer",
    body: [
      { title: "Frais d’accès au service ", value: "0", unit: "FCFA" },
      { title: "1 numéro illimité", value: "5000", unit: "FCFA" },
      { title: "2 wifi extenders", value: "10 000", unit: "FCFA" },
    ],
    footer: { title: "Total", value: "27900", unit: "FCFA" },
  },
};
