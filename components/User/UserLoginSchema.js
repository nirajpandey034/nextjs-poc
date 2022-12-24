import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Please enter proper email').required(),
  password: yup.string().nullable().min(8).max(32).required(),
  rememberCred: yup.bool(),
});
