import React from "react";
import {
  Box,
  HStack,
  Image,
  Stack,
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";

export const HorizontalStepper = ({
  activeStepControl,
  stepStyle,
  separatorStyle,
  steps,
}) => {
  return (
    <Stack>
      <Stepper
        size={stepStyle.size ? stepStyle.size : "md"}
        colorScheme={
          stepStyle && stepStyle.colorScheme ? stepStyle.colorScheme : ""
        }
        index={activeStepControl}
        justifyContent={"start"}
        gap="2"
      >
        {steps.map((step, index) => (
          <Step key={`step-${index}`} flex={"none"} gap="0">
            <HStack
              bg={
                index < activeStepControl
                  ? stepStyle.onComplete
                  : index === activeStepControl
                    ? stepStyle.onActive
                    : stepStyle.onInComplete
              }
              opacity={index <= activeStepControl ? 1 : 0.5}
              p="0.625rem"
              borderRadius={
                stepStyle.borderRadius ? stepStyle.borderRadius : "0.5rem"
              }
              color={
                index < activeStepControl
                  ? stepStyle.color.before
                  : stepStyle.color.after
              }
            >
              <StepIndicator>
                <StepStatus
                  complete={
                    step.style.onComplete ? (
                      <Image
                        src={step.style.onComplete}
                        alt=""
                        rounded={
                          stepStyle && stepStyle.rounded
                            ? stepStyle.rounded
                            : "full"
                        }
                      />
                    ) : (
                      <></>
                    )
                  }
                  active={
                    step.style.onActive ? (
                      <Image
                        src={step.style.onActive}
                        alt=""
                        rounded={
                          stepStyle && stepStyle.rounded
                            ? stepStyle.rounded
                            : "full"
                        }
                      />
                    ) : (
                      <></>
                    )
                  }
                  incomplete={
                    step.style.onInComplete ? (
                      <Image
                        src={step.style.onInComplete}
                        alt=""
                        rounded={
                          stepStyle && stepStyle.rounded
                            ? stepStyle.rounded
                            : "full"
                        }
                      />
                    ) : (
                      <></>
                    )
                  }
                />
              </StepIndicator>
              {step.title && (
                <Box flexShrink="0" fontSize={"1rem"}>
                  <StepTitle>{step.title}</StepTitle>
                </Box>
              )}
            </HStack>
            <StepSeparator
              mx="0"
              style={
                index < activeStepControl
                  ? {
                      background: separatorStyle.onComplete,
                      width: stepStyle.spacing ? stepStyle.spacing : "30px",
                    }
                  : {
                      background: separatorStyle.onInComplete,
                      width: stepStyle.spacing ? stepStyle.spacing : "30px",
                    }
              }
            >
              <Box position="absolute" top="3.5" right="-5.5px">
                <BsChevronRight
                  color={
                    index < activeStepControl
                      ? separatorStyle.onComplete
                      : separatorStyle.onInComplete
                  }
                />
              </Box>
            </StepSeparator>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

HorizontalStepper.defaultProps = {
  activeStepControl: 0,
  stepStyle: {
    size: "sm",
    onComplete: "black",
    onActive: "#ff7900",
    onInComplete: "#dddddd",
    color: {
      before: "white",
      after: "black",
    },
  },
  separatorStyle: {
    onComplete: "black",
    onInComplete: "#dddddd",
  },
};
