import React from "react";
import {
  Box,
  HStack,
  Image,
  Stack,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper
} from "@chakra-ui/react";

export const HorizontalStepper = ({
  activeStepControl,
  stepStyle,
  separatorStyle,
  steps
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
      >
        {steps.map((step, index) => (
          <Step key={index} flex={"none"}>
            <HStack
              bg={
                index < activeStepControl
                  ? stepStyle.onComplete
                  : index == activeStepControl
                  ? stepStyle.onActive
                  : stepStyle.onInComplete
              }
              opacity={index <= activeStepControl ? 1 : 0.5}
              p={stepStyle.padding ? stepStyle.padding : "3"}
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
                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                </Box>
              )}
            </HStack>
            <StepSeparator
              style={
                index < activeStepControl
                  ? {
                      background: separatorStyle.onComplete,
                      width: stepStyle.spacing ? stepStyle.spacing : "30px"
                    }
                  : {
                      background: separatorStyle.onInComplete,
                      width: stepStyle.spacing ? stepStyle.spacing : "30px"
                    }
              }
            >
              <Box
                position="absolute"
                top={stepStyle.padding ? stepStyle.padding : "3"}
                right="-0.5"
                bgColor={
                  index < activeStepControl
                    ? separatorStyle.onComplete
                    : separatorStyle.onInComplete
                }
                h="30px"
                w="30px"
                style={{
                  clipPath:
                    "polygon(47% 23%, 100% 52%, 47% 79%, 47% 69%, 90% 52%, 47% 33%)"
                }}
              ></Box>
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
    size: "md",
    onComplete: "black",
    onActive: "#ff7900",
    onInComplete: "#dddddd",
    color: {
      before: "white",
      after: "black"
    }
  },
  separatorStyle: {
    onComplete: "black",
    onInComplete: "#dddddd"
  }
};
