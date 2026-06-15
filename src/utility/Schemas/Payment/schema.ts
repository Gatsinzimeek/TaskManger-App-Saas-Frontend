import { number, object } from "yup";

export const paymentSchema = object({
  phone: number().typeError('Phone must be a number').required('Phone is required').positive('Phone must be a positive number').integer('Phone must be an integer').min(100000000, 'Phone must be at least 9 digits').max(9999999999, 'Phone must be at most 10 digits'),
 });