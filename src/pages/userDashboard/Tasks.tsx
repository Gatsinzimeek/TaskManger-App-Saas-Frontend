import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { newTaskSchema } from '@/utility/Schemas/Task/Newtask';
import { FaPlus } from 'react-icons/fa';
import { TbFileDescription } from "react-icons/tb";
import { TbNotes } from "react-icons/tb";
import { useGetTasksQuery,useCreateTaskMutation, useDeleteTaskMutation } from '@/features/task/taskApi';
import { FaTrash } from 'react-icons/fa6';
import { FaRegEdit } from "react-icons/fa";
import Edit from '@/components/TaskModal/Edit';
import Delete from '@/components/TaskModal/Delete';

const Tasks: React.FC = () => {


   const { data } = useGetTasksQuery();
   const [createTask, {isLoading}] = useCreateTaskMutation();
   const [deleteTask] = useDeleteTaskMutation();
  
   // handler for creating task
  const handleSubmit = async (value: any) => {
    try {
      const response = await createTask(value).unwrap();
      if(response?.message){
        toast.success(response.message);
      }
    } catch (error:any) {
        toast.error(error?.data?.message || "error During create task");
    }
  }

  // handler for remove of Task function 
  const handleDelete = async (id:string) => {
      const removeTask = await deleteTask(id);
      if(removeTask) {
        toast.success('Task Delete sucessfully');
      }
  }

  // changing of background color based on status we recive from server 

  const changeBgcolorStatus = (status: string) => { 
      switch(status) {
        case "todo": 
          return 'bg-lime-300'
        case "inprogress": 
          return 'bg-yellow-200'
        case "completed": 
        return 'bg-green-300'
        default:  
         return 'bg-gray-300'
      }  
  } 
  return (
    <div className="p-6">
      <div className='flex justify-between mb-9 mt-3'>
        <div className='text-gray-600'>
            <h1>MANAGE TASKS</h1>
            <p className='text-[10px]'>0rganize Your activity here!</p>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
            <Button className='bg-blue-400 p-6 hover:bg-blue-500 cursor-pointer'>
                    <FaPlus size={10}/>
                    <span>Create Task</span>
                  </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
              </DialogHeader>
                <Formik
                              initialValues={{ title: '', description: '' }}
                              onSubmit={handleSubmit}
                              validationSchema={newTaskSchema}
                            >
                              {({ values, handleChange, handleSubmit, isValid, errors }) => (
                                <form onSubmit={(e) => {
                                  handleSubmit(e)
                                  if(!isValid) {
                                    Object.values(errors).forEach((err) => {
                                      toast.error(err as string);
                                    })
                                  }
                                  }}>
                                  <div className="flex justify-evenly gap-4  items-center m-5">
                                    <span>Title: </span>
                                    <div className='relative'>
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
                                  <div className="flex justify-between  items-center">
                                    <span>Description: </span>
                                    <div className='relative'>
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
                                  <button
                                type="submit"
                                disabled={isLoading}
                                className={`bg-blue-500 cursor-pointer text-white py-2 px-4 ml-40 rounded-md w-[50%] mt-4
                                 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 cursor-pointer"}
                                  `}
                              >
                                Save
                              </button>
                             </form>
                              )}
                            </Formik>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.Tasks?.map((task:any, index:number) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{task?.title}</TableCell>
              <TableCell>{task?.description}</TableCell>
              <TableCell>{new Date(task?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}</TableCell>
              <TableCell><span className={`${changeBgcolorStatus(task?.status)} rounded-xl p-1 pl-3 pr-3 text-gray-700`}>{task?.status}</span></TableCell>
              <TableCell className='flex items-center gap-3'>
                  <Edit task={task}>
                       <FaRegEdit size={16} className='cursor-pointer text-blue-400'></FaRegEdit>
                  </Edit>
                  <Delete handleDelete={() => handleDelete(task._id)} >
                    <FaTrash className='text-red-400 cursor-pointer'></FaTrash>
                  </Delete>
                 </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tasks;

//    
                                // {isLoading ? "Loading..." : "Login"}