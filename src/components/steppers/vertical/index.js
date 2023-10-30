import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Image,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
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
          <Step key={`parentStep-${index}`}>
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
          <>
            <Step key={`parentStep-${index}`}>
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
            <Step key={index} display={!step.isOpen ? "none" : "flex"}>
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
                  <Step key={`childStep-${indexChild}`}>
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
          </>
        )
      )}
    </Stepper>
  );
};
VerticalStepper.propTypes = {
  activeStepControl: PropTypes.shape({
    parent: PropTypes.number.isRequired,
    child: PropTypes.number,
  }),
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      style: PropTypes.shape({
        onComplete: PropTypes.string.isRequired,
        onActive: PropTypes.string.isRequired,
        onInComplete: PropTypes.string,
      }),
      isOpen: PropTypes.bool,
      sub: PropTypes.arrayOf(
        PropTypes.shape({
          data: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string,
            })
          ),
        })
      ),
    })
  ),
  parentStepStyle: PropTypes.shape({
    rounded: PropTypes.string,
    separatorColor: PropTypes.string,
    colorScheme: PropTypes.string,
    spacing: PropTypes.string,
  }),
  childStepStyle: PropTypes.shape({
    rounded: PropTypes.string,
    colorScheme: PropTypes.string,
    spacing: PropTypes.string,
    separatorColor: PropTypes.string,
    onActive: PropTypes.string.isRequired,
    onComplete: PropTypes.string.isRequired,
    onInComplete: PropTypes.string,
  }),
};
VerticalStepper.defaultProps = {
  activeStepControl: {
    parent: 0,
    child: 0,
  },
  steps: [
    {
      title: "Test d'eligibilite",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
      },
      isOpen: true,
      sub: {
        data: [
          {
            title: "Information personnelle",
          },
          {
            title: "Localisation",
          },
        ],
      },
    },
    {
      title: "Inscription",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
      },
      isOpen: false,
      sub: {
        data: [
          {
            title: "Type d'abonnement",
          },
          {
            title: "Information de l'abonnement",
          },
          {
            title: "Verification",
          },
          {
            title: "Confirmation",
          },
          {
            title: "Signature",
          },
        ],
      },
    },
    {
      title: "Paiement",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
        onActive:
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
      },
    },
  ],
  childStepStyle: {
    onActive:
      "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/2704FC34-E4E2-4800-8610-59ED464962D9-optimized.png",
    onComplete:
      "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/2B5B02C1-231F-401C-8B1F-A2C287548DBA-optimized.png",
    //onInComplete:'https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/777F4553-0884-4894-A369-87613BFAFDD5.svg',
  },
};
