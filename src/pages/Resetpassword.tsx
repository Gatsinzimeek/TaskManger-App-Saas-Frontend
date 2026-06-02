import React from 'react';
import { Formik } from 'formik';
import { resetPasswordSchema } from '../components/Auth/resetpassword/schema';
import { FaArrowLeft, FaEnvelope } from 'react-icons/fa';
import LoginImg from '../assets/Register.png';

const Resetpassword: React.FC = () => {
  return (
        <div className=' text-center flex items-center  justify-center h-screen gap-10 max-sm:block'>
          <div className='rounded-lg shadow-lg shadow-blue-500/20 p-8 relative max-md:h-[100%]'>
            <a href="/" className='text-blue-500 absolute left-14 top-5'>Go back to Login<FaArrowLeft className="absolute top-1 right-34  text-blue-500" /></a>
            <h1 className='text-2xl font-bold mb-4 mt-10'>Forgot Password</h1>
            <p className='text-gray-600 mb-[60px]'>Please enter your email address to reset your <br /> password.</p>
            
            <Formik
              initialValues={{ email: ''}}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={resetPasswordSchema}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-500" /> 
                    <input
                      type="email"
                      name="email"
                      placeholder={`Email Address`}
                      value={values.email}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 w-full mt-4 cursor-pointer shadow-2xl focus:ring-blue-500">
                    Reset Password
                  </button>
                 </form>
              )}
            </Formik>
          </div>
          <div className='max-md:hidden'>
            <img src={LoginImg} alt="Login" className=" w-[500px] object-cover" draggable='false'/>
          </div>
    </div>
  )
}

export default Resetpassword