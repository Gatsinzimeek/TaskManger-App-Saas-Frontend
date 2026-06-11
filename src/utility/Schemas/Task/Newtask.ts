import {object, string} from 'yup'


export const newTaskSchema = object({
  title: string().min(3, 'title must be at least 3 characters').required('title is required'),
  description: string().min(10, 'description must be at least 10 characters').required('description is required'),
});