import React from 'react'
import { Formik } from 'formik';
import { forgetPasswordSchema } from '../utility/Schemas/Auth/forgetpassword/schema';
import { FaLock } from 'react-icons/fa';
import Loginimg from '../assets/Login.png'

const Forgetpassword: React.FC = () => {
  return (
    <div className=' text-center flex items-center  justify-center h-screen gap-10 max-sm:block'>
          <div className='rounded-lg shadow-lg shadow-blue-500/20 p-8 max-md:h-[100%]'>
            <h1 className='text-2xl font-bold mb-4'>Task Manager Saas</h1>
            <p className='text-gray-600 mb-[100px]'> Please Change your password account.</p>
            
            <Formik
              initialValues={{ oldpassword: '', newpassword: '' }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={forgetPasswordSchema}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                 <div className="relative">
                    <FaLock className="absolute left-3 top-7 text-gray-500" />
                    <input
                      type="password"
                      name="oldpassword"
                      placeholder="Old Password"
                      value={values.oldpassword}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                    />
                  </div>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-7 text-gray-500" />
                    <input
                      type="password"
                      name="newpassword"
                      placeholder="New Password"
                      value={values.newpassword}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                    />
                  </div>         
                  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 w-full mt-4 cursor-pointer shadow-2xl focus:ring-blue-500">
                    Change password
                  </button>
                  <p className='pt-4 text-[14px] text-gray-600 text-left'>You remembered you password account? <a href="/" className='text-blue-400'>login here</a></p>
               
                </form>
              )}
            </Formik>
          </div>
          <div className='max-md:hidden'>
            <img src={Loginimg} alt="Login" className=" w-[500px] object-cover" draggable='false'/>
          </div>
    </div>
  )
}

export default Forgetpassword;