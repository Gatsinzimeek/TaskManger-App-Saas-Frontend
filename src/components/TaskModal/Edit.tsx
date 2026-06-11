import React from 'react'
import { Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger, } from '../ui/dialog'

import { Formik } from 'formik'
import 

type Props = {
    children: React.ReactNode;

}

const Edit:React.FC<Props>= (props) => {
    const handleSubmit = () => {
        console.log("hello");
    }
  return (
    <Dialog>
            <DialogTrigger asChild>
                {props.children}
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
  )
}

export default Edit