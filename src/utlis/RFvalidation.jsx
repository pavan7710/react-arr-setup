import * as Yup from "yup";

export const passwordValidationSchema = Yup.string()
  .min(8, "Minimum 8 characters required")
  .required("Required")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
    "Password must contain at least one letter, one number, and one special character"
  );

export const emailValidation = Yup.string()
  .email("Please enter a valid email")
  .required(" Email is Required");

export const phoneNumberValidation = Yup.string()
.matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
.required('Phone number is required')

export const firstnameValidation = Yup.string().required('First Name is required')

export const lastnameValidation = Yup.string().required('Last Name is required')

export const roleValidation = Yup.string().required('Role is Required')
