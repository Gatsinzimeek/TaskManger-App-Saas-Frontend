import {object, string} from 'yup'

export const loginSchema = object({
  email: string().email('Invalid email format').required('Email is required'),
  password: string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});
export const registerSchema = object({
  username: string().min(3, 'Username must be at least 3 characters').required('Username is required'),
  email: string().email('Invalid email format').required('Email is required'),
  password: string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});
