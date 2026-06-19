import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { newTaskSchema } from '@/utility/Schemas/Task/Newtask';
import { TbNotes } from 'react-icons/tb';
import { TbFileDescription } from 'react-icons/tb';
import { useUpdateTaskMutation } from '@/features/task/taskApi';

interface Data {
  title: string;
  description: string;
  status?: string;
}

type Props = {
  children: React.ReactNode;
  task: any;
};

const Edit: React.FC<Props> = ({ children, task }) => {
  const [open, setOpen] = useState(false);

  const [updateTask, { isLoading }] = useUpdateTaskMutation();

  const handleEdit = async (
    id: string,
    data: Data,
    resetForm: () => void
  ) => {
    try {
      const response = await updateTask({
        id,
        ...data,
      }).unwrap();

      toast.success(response.message);

      resetForm();

      // Close popup after success
      setOpen(false);
    } catch (error: any) {
      toast.error(
        error?.data?.message ||
        "Error during updating task"
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>

        <Formik
          enableReinitialize
          initialValues={{
            title: task.title,
            description: task.description,
            status: task.status,
          }}
          validationSchema={newTaskSchema}
          onSubmit={(values, { resetForm }) =>
            handleEdit(task._id, values, resetForm)
          }
        >
          {({
            values,
            handleChange,
            setFieldValue,
            handleSubmit,
            isValid,
            errors,
          }) => (
            <form
              onSubmit={(e) => {
                handleSubmit(e);

                if (!isValid) {
                  Object.values(errors).forEach((err) => {
                    toast.error(err as string);
                  });
                }
              }}
            >
              <div className="flex justify-evenly gap-4 items-center m-5">
                <span>Title:</span>

                <div className="relative">
                  <TbFileDescription className="absolute left-3 top-3 text-gray-500" />

                  <input
                    type="text"
                    name="title"
                    placeholder="Enter Task Title"
                    value={values.title}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span>Description:</span>

                <div className="relative">
                  <TbNotes className="absolute left-3 top-3 text-gray-500" />

                  <textarea
                    name="description"
                    placeholder="Enter Task Description"
                    value={values.description}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-around items-center mt-4">
                <span>Status:</span>

                <Select
                  value={values.status}
                  onValueChange={(value) =>
                    setFieldValue("status", value)
                  }
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="todo">
                      To Do
                    </SelectItem>

                    <SelectItem value="inprogress">
                      In Progress
                    </SelectItem>

                    <SelectItem value="completed">
                      Completed
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`bg-blue-500 text-white py-2 px-4 ml-40 rounded-md w-[50%] mt-4 ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600 cursor-pointer"
                }`}
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default Edit;