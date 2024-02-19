import { useEventFieldDispatch } from "./useEventFieldDispatch";

export const useForm = ({
  setSaveValues,
  captchaRef,
  setSaveForm,
  submit,
  saveValues,
  verifyCaptcha,
}) => {
  const onSubmitForm = async (values) => {
    setSaveValues(values);
    await captchaRef.current.executeAsync();
  };
  const eventDispatch = ({ searchField: item, form, values }) => {
    const newForm = useEventFieldDispatch({
      searchField: item,
      form,
      values,
    });
    if (newForm) setSaveForm(newForm);
  };
  const callback = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    const res = await verifyCaptcha(captchaCode);

    if (res.data.success) {
      submit(saveValues);
    }
  };

  return {
    onSubmitForm,
    eventDispatch,
    callback,
  };
};
