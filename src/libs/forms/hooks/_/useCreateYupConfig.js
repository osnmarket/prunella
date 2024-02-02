import { Text } from "@chakra-ui/react";
import { buildYup } from "schema-to-yup";

export const useCreateYupConfig = ({ schema, config, values }) => {
  const { fields, labels } = mapperFields(schema, values);
  try {
    const validator = buildYup(schema, config);
    return {
      validator,
      fields,
      labels,
      values,
      variant: schema?.variant,
    };
  } catch (error) {
    console.log(error);
  }
};
const mapperFields = (schema, values) => {
  const { properties, sections } = schema;
  let fields = [];
  let labels = [];
  let variant;
  let defaultValues = {};
  if (sections?.length) {
    variant = "section";
    sections?.forEach((section) => {
      let blocks = [];
      section?.blocks?.forEach((key) => {
        let { field, defaultValue, label } = mapOneField({
          property: properties[key],
          key,
        });
        defaultValues[key] = values[key] || defaultValue;
        if (defaultValues[key]) field.show = true;
        labels.push({ key: key, label: label });
        blocks.push(field);
      });

      let fieldWithSectionTitle = {
        title: section?.title,
        blocks: blocks,
      };
      fields.push(fieldWithSectionTitle);
    });
  } else {
    variant = "normal";
    Object?.keys(properties).forEach((key) => {
      let {
        field: fieldWithoutSectionTitle,
        defaultValue,
        label,
      } = mapOneField({
        property: properties[key],
        key,
      });
      defaultValues[key] = values[key] || defaultValue;
      if (defaultValues[key]) fieldWithoutSectionTitle.show = true;
      labels.push({ key: key, label: label });
      fields.push(fieldWithoutSectionTitle);
    });
  }
  return {
    fields: {
      data: fields,
      defaultValues: defaultValues,
      variant: variant,
    },
    labels,
  };
};

const mapRadio = (property) => {
  let radioItems = [];
  property?.enum.forEach((item, i) => {
    radioItems.push({
      uuid: property?.enum_titles[i],
      children: <Text>{item}</Text>,
    });
  });
  return {
    radioItems: radioItems,
    columns: property?.columns,
    defaultValue: property?.defaultValue,
    label: property?.label,
  };
};

const mapArray = (props) => {
  const { property, field, variant } = props;
  let options = [];
  property?.values.forEach((item, i) => {
    options.push({
      name: property?.labels[i],
      value: item,
    });
  });
  field.select = variant === "select";
  field.isRadio = variant === "radio";
  field.columns = property?.columns;
  field.options = options;
  field.use = property?.use;
  field.filterUid = property?.filterUid;
  field.nextUid = property?.nextUid;
  return field;
};

const mapDefaultFieldAttribute = (props) => {
  const { property, key } = props;
  return {
    uid: property?.uid || key,
    placeholder: property?.placeholder,
    label: property?.label,
    textArea: property?.format === "textArea",
    isDisabled: property?.disabled ?? false,
    section_title: property?.section_title,
    styles: property?.styles,
    defaultValue: property?.defaultValue || null,
    show: !property.parent,
    dispatch: property?.dispatch,
    isUpdated: property?.isUpdated ?? false,
    isShow: property?.isShow ?? false,
    type: property?.format,
  };
};
const mapOneField = (props) => {
  const { property, key } = props;
  let field = mapDefaultFieldAttribute({
    property,
    key,
  });
  if (property?.values) {
    if (property?.format !== "radio") {
      field = mapArray({ property, field, variant: "select" });
    } else {
      field = mapArray({ property, field, variant: "radio" });
    }
  }
  return { field, defaultValue: field?.defaultValue, label: field?.label };
};
