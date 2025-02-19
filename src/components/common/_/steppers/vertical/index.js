import React, { Fragment } from "react";
import {
  Box,
  Image,
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
} from "@chakra-ui/react";

export const VerticalStepper = ({
  activeStepControl,
  parentStepStyle,
  childStepStyle,
  steps,
}) => {
  return (
    <Stepper
      index={activeStepControl.parent}
      size="lg"
      orientation="vertical"
      colorScheme={
        parentStepStyle && parentStepStyle.colorScheme
          ? parentStepStyle.colorScheme
          : ""
      }
      gap="0"
      zIndex="0"
    >
      {steps.map((step, index) =>
        !step.sub ? (
          <Step key={`parent-step-${index}`}>
            <StepIndicator>
              <StepStatus
                complete={
                  step.style.onComplete ? (
                    <Image
                      src={step.style.onComplete}
                      alt=""
                      rounded={
                        parentStepStyle && parentStepStyle.rounded
                          ? parentStepStyle.rounded
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
                        parentStepStyle && parentStepStyle.rounded
                          ? parentStepStyle.rounded
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
                        parentStepStyle && parentStepStyle.rounded
                          ? parentStepStyle.rounded
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
              <Box
                flexShrink="0"
                height={
                  parentStepStyle && parentStepStyle.spacing
                    ? parentStepStyle.spacing
                    : "90px"
                }
              >
                <StepTitle
                  color={
                    index > activeStepControl.parent ? "#cccccc" : "#000000"
                  }
                >
                  {step.title}
                </StepTitle>
              </Box>
            )}

            <StepSeparator
              style={
                index <= activeStepControl.parent
                  ? {
                      background:
                        parentStepStyle && parentStepStyle.separatorColor
                          ? parentStepStyle.separatorColor
                          : "black",
                    }
                  : {}
              }
            />
          </Step>
        ) : (
          <Fragment key={`parent-step-${index}`}>
            <Step>
              <StepIndicator>
                <StepStatus
                  complete={
                    step.style.onComplete ? (
                      <Image
                        src={step.style.onComplete}
                        alt=""
                        rounded={
                          parentStepStyle && parentStepStyle.rounded
                            ? parentStepStyle.rounded
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
                          parentStepStyle && parentStepStyle.rounded
                            ? parentStepStyle.rounded
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
                          parentStepStyle && parentStepStyle.rounded
                            ? parentStepStyle.rounded
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
                <Box
                  flexShrink="0"
                  height={
                    parentStepStyle && parentStepStyle.spacing
                      ? parentStepStyle.spacing
                      : "90px"
                  }
                >
                  <StepTitle
                    color={
                      index > activeStepControl.parent ? "#cccccc" : "#000000"
                    }
                  >
                    {step.title}
                  </StepTitle>
                </Box>
              )}

              <StepSeparator
                style={
                  index <= activeStepControl.parent
                    ? {
                        background:
                          parentStepStyle && parentStepStyle.separatorColor
                            ? parentStepStyle.separatorColor
                            : "black",
                      }
                    : {}
                }
              />
            </Step>
            <Step display={!step.isOpen ? "none" : "flex"}>
              <Stepper
                index={activeStepControl.child}
                size="sm"
                orientation="vertical"
                colorScheme={
                  childStepStyle.colorScheme ? childStepStyle.colorScheme : ""
                }
                gap="0"
                ml="8px"
                zIndex="1"
              >
                {step.sub.data.map((stepChild, indexChild) => (
                  <Step key={`child-step-${indexChild}`}>
                    <StepIndicator>
                      <StepStatus
                        complete={
                          childStepStyle.onComplete ? (
                            <Image
                              src={childStepStyle.onComplete}
                              alt=""
                              rounded={
                                childStepStyle.rounded
                                  ? childStepStyle.rounded
                                  : "full"
                              }
                            />
                          ) : (
                            <></>
                          )
                        }
                        active={
                          childStepStyle.onActive ? (
                            <Image
                              src={childStepStyle.onActive}
                              alt=""
                              rounded={
                                childStepStyle.rounded
                                  ? childStepStyle.rounded
                                  : "full"
                              }
                            />
                          ) : (
                            <></>
                          )
                        }
                        incomplete={
                          childStepStyle.onInComplete ? (
                            <Image
                              src={childStepStyle.onInComplete}
                              alt=""
                              rounded={
                                childStepStyle.rounded
                                  ? childStepStyle.rounded
                                  : "full"
                              }
                            />
                          ) : (
                            <Box
                              w="20px"
                              h="20px"
                              rounded={
                                childStepStyle.rounded
                                  ? childStepStyle.rounded
                                  : "full"
                              }
                              bg="#fff"
                            ></Box>
                          )
                        }
                      />
                    </StepIndicator>

                    {stepChild.title && (
                      <Box
                        flexShrink="0"
                        height={
                          childStepStyle.spacing
                            ? childStepStyle.spacing
                            : "70px"
                        }
                      >
                        <StepTitle
                          color={
                            indexChild > activeStepControl.child
                              ? "#cccccc"
                              : "#000000"
                          }
                        >
                          {stepChild.title}
                        </StepTitle>
                      </Box>
                    )}

                    <StepSeparator
                      style={{
                        background: childStepStyle.separatorColor
                          ? childStepStyle.separatorColor
                          : "black",
                      }}
                    />
                  </Step>
                ))}
              </Stepper>
              <StepSeparator
                style={{
                  background: childStepStyle.separatorColor
                    ? childStepStyle.separatorColor
                    : "black",
                }}
              />
            </Step>
          </Fragment>
        ),
      )}
    </Stepper>
  );
};
VerticalStepper.defaultProps = {
  activeStepControl: {
    parent: 0,
    child: 0,
  },
};
