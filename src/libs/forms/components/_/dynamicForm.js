import {Box, Stack, Text, Wrap} from "@chakra-ui/react";
import React, {Fragment, useRef, useState} from "react";
import {Form, Formik} from "formik";
import {mapDynamicFormInitialValues} from "../../../tools/_forms/mapper";
import {DynamicFormField} from "./dynamicFormField";
import {useForm} from "../../hooks";

export const DynamicForm = ({
                                submit,
                                form,
                                updated = false,
                                children,
                            }) => {
    const [saveValues, setSaveValues] = useState();
    const [saveForm, setSaveForm] = useState(form);
    const {validator, fields} = saveForm;
    const captchaRef = useRef(null);
    const {onSubmitForm, eventDispatch, callback} = useForm({
        saveValues,
        captchaRef,
        setSaveForm,
        submit,
        setSaveValues,
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
                                                    (!updated && item?.show) || (updated && item?.isShow)
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
                                            }}
                                            key={`form-field-${i}`}
                                        />
                                    ))}
                                </Wrap>
                            )}
                            {children}
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Fragment>
    );
};
