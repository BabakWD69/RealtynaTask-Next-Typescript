import * as Yup from "yup";

const SubscribeValidation = Yup.object().shape({
  email: Yup.string()
    .email("please insert correct email!")
    .required("please insert email")
    .typeError("please insert correct email!"),
});

export { SubscribeValidation };
