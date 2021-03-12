import * as yup from 'yup';

export const loginValidate = yup.object().shape({
  email: yup.string().email().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});
