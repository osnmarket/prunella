import React from "react";
import { PropTypes } from "prop-types";
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
  Stepper,
} from "@chakra-ui/react";

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
        //orientation="vertical"
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
                      width: stepStyle.spacing ? stepStyle.spacing : "30px",
                    }
                  : {
                      background: separatorStyle.onInComplete,
                      width: stepStyle.spacing ? stepStyle.spacing : "30px",
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
                    "polygon(47% 23%, 100% 52%, 47% 79%, 47% 69%, 90% 52%, 47% 33%)",
                }}
              ></Box>
            </StepSeparator>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
HorizontalStepper.propTypes = {
  activeStepControl: PropTypes.number.isRequired,
  stepStyle: PropTypes.shape({
    size: PropTypes.string.isRequired,
    padding: PropTypes.string,
    rounded: PropTypes.string,
    colorScheme: PropTypes.string,
    spacing: PropTypes.number,
    borderRadius: PropTypes.string,
    color: PropTypes.shape({
      before: PropTypes.string,
      after: PropTypes.string,
    }),
  }),
  separatorStyle: PropTypes.shape({
    onComplete: PropTypes.string.isRequired,
    onInComplete: PropTypes.string.isRequired,
  }),
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      style: PropTypes.shape({
        onComplete: PropTypes.string.isRequired,
        onActive: PropTypes.string.isRequired,
        onInComplete: PropTypes.string,
      }),
    })
  ),
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
      after: "black",
    },
  },
  separatorStyle: {
    onComplete: "black",
    onInComplete: "#dddddd",
  },
  steps: [
    {
      title: "Test d'eligibilite",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
        onInComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
      },
    },
    {
      title: "Inscription",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
        onInComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
      },
    },
    {
      title: "Paiement",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
        onInComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
      },
    },
    {
      title: "Notification",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/579AFAC9-4FF9-4EEC-81C5-0CB28A247932-optimized.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/579AFAC9-4FF9-4EEC-81C5-0CB28A247932-optimized.png",
        onInComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/579AFAC9-4FF9-4EEC-81C5-0CB28A247932-optimized.png",
      },
    },
  ],
};
