import * as Yup from 'yup'

 export  const passwordValidationSchema = Yup.string()
  .min(8, 'Minimum 8 characters required')
  .required('Required')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
    'Password must contain at least one letter, one number, and one special character'
);

export const emailValidation  =  Yup.string().email("Please enter a valid email").required("Required")