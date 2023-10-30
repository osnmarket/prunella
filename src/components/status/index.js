import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";

export const ErrorComponent = ({ title, desc }) => {
  return (
    <Alert status={"error"}>
      <AlertIcon />
      <AlertTitle>{title || "oups"} </AlertTitle>
      <AlertDescription>
        {desc || "We have trouble loading this component. Please try again"}
      </AlertDescription>
    </Alert>
  );
};

ErrorComponent.defaultProps = {
  title: "Oups",
  desc: "We have trouble loading this component. Please try again",
};

export const WarningComponent = ({ message }) => {
  return (
    <Alert status={"warning"}>
      <AlertIcon />
      {message || "This component might load incorrectly"}
    </Alert>
  );
};

WarningComponent.defaultProps = {
  message: "This component might load incorrectly",
};

export const LoadingComponent = ({ color }) => {
  return <Spinner color={color} />;
};

WarningComponent.defaultProps = {
  color: "orange",
};
