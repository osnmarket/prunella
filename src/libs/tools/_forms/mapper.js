export const mapDynamicFormInitialValues = (arr) =>
    arr?.validator?._nodes?.reduce((obj, item) => {
        const {key} = typeof item === "object" ? item : {key: item};
        obj[key] = arr?.fields?.defaultValues[key] ?? "";
        return obj;
    }, {});

export const mapFormInitialValues = (arr) =>
    arr.reduce((obj, item) => {
        const {key, defaultValue = ""} =
            typeof item === "object" ? item : {key: item};
        obj[key] = defaultValue;
        return obj;
    }, {});