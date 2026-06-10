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

import { FaPlus } from 'react-icons/fa';

const Tasks: React.FC = () => {
 const users = [
    {
      id: 1,
      username: "meek",
      email: "meek@gmail.com",
    },
    {
      id: 2,
      username: "john",
      email: "john@gmail.com",
    },
  ];

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
                              initialValues={{ email: '', password: '' }}
                              onSubmit={handleSubmit}
                              validationSchema={loginSchema}
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
                                  <div className="relative">
                                    {/* <FaEnvelope className="absolute left-3 top-3 text-gray-500" /> */}
                                    <input
                                      type="email"
                                      name="email"
                                      placeholder="Email Address"
                                      value={values.email}
                                      onChange={handleChange}
                                      className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                  </div>
                                  <div className="relative">
                                    {/* <FaLock className="absolute left-3 top-7 text-gray-500" /> */}
                                    <input
                                      type="password"
                                      name="password"
                                      placeholder="Password"
                                      value={values.password}
                                      onChange={handleChange}
                                      className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                                    />
                                  </div>
                                    <p className='pt-4 text-[14px] text-left'><a href="/resetpassword" className='text-blue-400'>Forget Your password</a></p>           
                                  <button
                                type="submit"
                                // disabled={isLoading}
                                className={`bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-4
                                `}
                              >
                              </button>
                                  <p className='pt-4 text-[14px] text-gray-600 text-left'>You don't have account yet? <a href="/register" className='text-blue-400'>Register here</a></p>
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
            <TableHead>ID</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tasks;

//     ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 cursor-pointer"}
                                // {isLoading ? "Loading..." : "Login"}