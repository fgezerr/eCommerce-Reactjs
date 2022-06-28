import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("geçerili bir email girilmelidir!..")
    .required("zorunlu alan."),
  password: yup
    .string()
    .min(5, "en az 5 karakter girilmelidir!..")
    .required("zorunlu alan"),
});

export default validations;
