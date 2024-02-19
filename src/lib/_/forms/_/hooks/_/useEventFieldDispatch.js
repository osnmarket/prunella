export const useEventFieldDispatch = ({ searchField, form, values }) => {
  try {
    if (searchField?.dispatch) {
      form?.fields?.data?.map((formField) => {
        if (form?.fields?.variant === "section") {
          formField?.blocks?.map((sectionFormField) => {
            return showOrHiddenField(searchField, sectionFormField, values);
          });
        } else {
          return showOrHiddenField(searchField, formField, values);
        }
      });
    }
    return form;
  } catch (error) {
    console.log(error);
  }
};

const showOrHiddenField = (searchField, formField, values) => {
  const { uid } = formField;
  const { uid: uid_search, dispatch } = searchField;
  if (dispatch?.fields?.includes(uid)) {
    const value = values[uid_search];
    formField.show = !!dispatch.events[value]?.includes(uid);
    formField.isDisabled = !dispatch.events[value]?.includes(uid);
  }
  return formField;
};
