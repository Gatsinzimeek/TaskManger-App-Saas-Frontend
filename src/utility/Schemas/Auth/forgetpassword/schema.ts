import { object, string  } from "yup";

export const forgetPasswordSchema = object({
  oldpassword: string().min(6, 'Password must be at least 6 characters').required('Old Password is required'),
  newpassword: string().min(6, 'Password must be at least 6 characters').required('New Password is required'),
});