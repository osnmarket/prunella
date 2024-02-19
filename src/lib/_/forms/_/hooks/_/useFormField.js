import { useMemo } from "react";
import countryList from "react-select-country-list";

export const useFormField = ({
  formField,
  setloading,
  values,
  getFormFieldOptions,
}) => {
  const getOptionsOfResponse = (response) => {
    if (response) {
      const { data, status } = response;
      if (status === 200) {
        formField.options = data;
      }
    }
  };
  const fetchOptions = async (filterValue) => {
    return await getFormFieldOptions({
      entity: formField?.use,
      filter: filterValue
        ? {
            city: JSON.parse(filterValue)?.value,
          }
        : null,
    });
  };

  if (formField?.use === "country") {
    formField.options = useMemo(() => countryList().getData(), []);
  } else {
    if (!formField?.filterUid) {
      useMemo(() => {
        setloading(true);
        fetchOptions().then((response) => {
          getOptionsOfResponse(response);
          setloading(false);
        });
      }, []);
    } else {
      const filterValue = values[formField?.filterUid];
      useMemo(() => {
        setloading(true);
        fetchOptions(filterValue).then((response) => {
          getOptionsOfResponse(response);
          setloading(false);
        });
      }, [filterValue]);
    }
  }

  return formField;
};
