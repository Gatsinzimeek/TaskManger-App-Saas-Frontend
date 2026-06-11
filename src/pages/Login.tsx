import React from 'react';
import LoginImg from '../assets/Login.png';
import { Formik }from 'formik';
import { loginSchema } from '../utility/Schemas/Auth/Login/schema';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { useLoginMutation } from '../features/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login: React.FC = () => {
  const [login, {isLoading}] = useLoginMutation();
  const navigate = useNavigate();
  const handleSubmit = async (value: any) => {
    try {
      const response = await login(value).unwrap();
      if(response?.message) {
              setTimeout(() => {
                toast.success(response.message);
              }, 2000);
      }

    // 👇 SAVE TOKEN
    localStorage.setItem("token", response.token);

    // 👇 SAVE USER
    localStorage.setItem("user", JSON.stringify(response.user));
      setTimeout(() => {
        const redirectPath =  localStorage.getItem("redirectAfterLogin");

          navigate(redirectPath || "/dashboard" );
        }, 1000);
    } catch (error: any) {
      toast.error(error?.data?.message || 'error Occured during login try again later!');
    }
  }

  return (
    <div className=' text-center flex items-center  justify-center h-screen gap-10 max-sm:block'>
          <div className='rounded-lg shadow-lg shadow-blue-500/20 p-8 max-md:h-[100%]'>
            <h1 className='text-2xl font-bold mb-4'>Task Manager Saas</h1>
            <p className='text-gray-600 mb-[100px]'>Welcome back! Please login to your account.</p>
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
                    <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
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
                  <button
                type="submit"
                disabled={isLoading}
                className={`bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-4
                  ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 cursor-pointer"}
                `}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
                  <p className='pt-4 text-[14px] text-gray-600 text-left'>You don't have account yet? <a href="/register" className='text-blue-400'>Register here</a></p>
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

export default Login;