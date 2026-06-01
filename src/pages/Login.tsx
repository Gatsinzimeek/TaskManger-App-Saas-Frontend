import React from 'react';
import LoginImg from '../assets/Login.png';
import { Formik }from 'formik';
import { loginSchema } from '../components/Auth/Login/schema';
import { FaLock, FaEnvelope } from 'react-icons/fa';

const Login: React.FC = () => {
  

  return (
    <div className=' text-center flex items-center  justify-center h-screen gap-10 max-sm:block'>
          <div className='rounded-lg shadow-lg shadow-blue-500/20 p-8 '>
            <h1 className='text-2xl font-bold mb-4'>Task Manager Saas</h1>
            <p className='text-gray-600 mb-[100px]'>Welcome back! Please login to your account.</p>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={loginSchema}
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
                  <div className="relative">
                    <FaLock className="absolute left-3 top-7 text-gray-500" />
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
                  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 w-full mt-4 cursor-pointer shadow-2xl focus:ring-blue-500">
                    Login
                  </button>
                  <p className='pt-4 text-[14px] text-gray-600 text-left'>You don't have account yet? <a href="/register" className='text-blue-400'>Register here</a></p>
                </form>
              )}
            </Formik>
          </div>
          <div className='image md:novisible'>
            <img src={LoginImg} alt="Login" className=" w-[500px] object-cover" draggable='false'/>
          </div>
    </div>
  )
}

export default Login;