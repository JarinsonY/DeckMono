import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required("Este campo es requerido").email("Ingrese un email válido"),
  password: yup.string().required("Este campo es requerido"),
});
