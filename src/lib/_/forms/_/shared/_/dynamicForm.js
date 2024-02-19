import { Box, Stack, Text, Wrap } from "@chakra-ui/react";
import React, { Fragment, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { mapDynamicFormInitialValues } from "../../../../tools";
import { DynamicFormField } from "./dynamicFormField";
import { useForm } from "../../hooks";
import ReCAPTCHA from "react-google-recaptcha";
import { NavBtn } from "../../../../../../components/variants";

export const DynamicForm = ({
  submit,
  form,
  updated = false,
  children,
  getFormFieldOptions,
  verifyCaptcha,
  withCaptcha,
  prevStep,
  nextStep,
}) => {
  const [saveValues, setSaveValues] = useState();
  const [saveForm, setSaveForm] = useState(form);
  const { validator, fields } = saveForm;
  const captchaRef = useRef(null);
  const { onSubmitForm, eventDispatch, callback } = useForm({
    saveValues,
    captchaRef,
    setSaveForm,
    submit,
    setSaveValues,
    verifyCaptcha,
  });
  return (
    <Fragment>
      <Formik
        validationSchema={validator}
        initialValues={mapDynamicFormInitialValues(saveForm)}
        onSubmit={onSubmitForm}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <Form>
            <Stack>
              {fields?.variant === "section" ? (
                fields?.data?.map((field, i) => (
                  <Stack key={`form-group-field-${i}`}>
                    <Stack
                      direction={"column"}
                      spacing={"1.5rem"}
                      key={`form-group-${i}`}
                      mb="1.5rem"
                    >
                      {field.blocks.filter(
                        (item) =>
                          (!updated && item?.show) || (updated && item?.isShow),
                      ).length > 0 && (
                        <Box>
                          <Text fontWeight={"bold"} fontSize={"1.25rem"}>
                            {field?.title}
                          </Text>
                        </Box>
                      )}
                      <Wrap spacing={"2rem"}>
                        {field.blocks.map((item, j) => (
                          <DynamicFormField
                            {...{
                              field: item,
                              values,
                              form: saveForm,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              eventDispatch,
                              updated,
                              handleSubmit,
                              isValid,
                              getFormFieldOptions,
                            }}
                            key={`group-${i}-form-field-${j}`}
                          />
                        ))}
                      </Wrap>
                    </Stack>
                  </Stack>
                ))
              ) : (
                <Wrap spacing={"2rem"} mb="1.5rem">
                  {fields?.data?.map((field, i) => (
                    <DynamicFormField
                      {...{
                        field,
                        form: saveForm,
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        eventDispatch,
                        updated,
                        handleSubmit,
                        isValid,
                        getFormFieldOptions,
                      }}
                      key={`form-field-${i}`}
                    />
                  ))}
                </Wrap>
              )}
              {children}
            </Stack>
            <NavBtn
              {...{
                nextStep: {
                  onClick: handleSubmit,
                  isDisabled: Object?.keys(errors)?.length,
                  ...nextStep,
                },
                prevStep,
              }}
            />
            {withCaptcha && (
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                ref={captchaRef}
                size="invisible"
                onChange={callback}
              />
            )}
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};
