import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .nullable()
    .min(5, 'must be atleast 5 characters long')
    .max(20)
    .required('Mandatory Field'),
  lastName: yup
    .string()
    .nullable()
    .min(5, 'must be atleast 5 characters long')
    .max(20)
    .required('Mandatory Field'),
  email: yup
    .string()
    .email('Please enter proper email')
    .required('Mandatory Field'),
  phone: yup.number().required('Mandatory Field'),
  password: yup
    .string()
    .nullable()
    .min(8, 'must be atleast 8 characters long')
    .max(32)
    .required('Mandatory Field'),
  cpassword: yup
    .string()
    .nullable()
    .min(8, 'must be atleast 8 characters long')
    .max(32)
    .required('Mandatory Field')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  dob: yup
    .date()
    .max(new Date(Date.now() - 567648000000), 'You must be at least 18 years')
    .required('Mandatory Field'),
  isGay: yup.bool(),
});
