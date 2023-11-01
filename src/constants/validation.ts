import * as yup from 'yup';

const baseFieldYup = {
  email: yup.string().email().required('validation.required'),
  password: yup
    .string()
    .min(6, 'validation.minPassword')
    .max(20, 'validation.maxPassword')
    .required('validation.required'),
  age: yup.number().min(1, 'validation.invalidAge').max(100, 'validation.invalidAge'),
};

export const loginYupSchema = yup.object().shape({
  email: baseFieldYup.email,
  password: baseFieldYup.password,
});

export const registerYupSchema = yup.object().shape({
  email: baseFieldYup.email,
  password: baseFieldYup.password,
});
