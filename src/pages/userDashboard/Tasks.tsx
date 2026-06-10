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
                <DialogTitle>Create Task</DialogTitle>
              </DialogHeader>

              <p>My modal content</p>
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