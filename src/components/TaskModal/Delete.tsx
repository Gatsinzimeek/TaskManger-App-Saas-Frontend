import React from 'react'
 import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { PiWarningCircle } from "react-icons/pi";

type Props = {
    children: React.ReactNode;
    handleDelete: () => void;
}

const Delete: React.FC<Props> = (props) => {
  return (
    <AlertDialog>
  <AlertDialogTrigger asChild>
    {props.children}
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
        <PiWarningCircle color='red' size={30}></PiWarningCircle>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        You will not be able to recover this Task
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='bg-blue-400 text-white'>Cancel</AlertDialogCancel>
      <AlertDialogAction className='bg-red-500 text-white' onClick={props.handleDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
  )
}

export default Delete;