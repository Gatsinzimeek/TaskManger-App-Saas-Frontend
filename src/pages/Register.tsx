import { Formik } from "formik";
import { FaUser,FaLock, FaEnvelope } from "react-icons/fa";
import { registerSchema } from "../components/Auth/Schema";
import registImg from '../assets/Register.png' 


const Register:React.FC = () => {
  return (    <div className=' text-center flex items-center  justify-center h-screen gap-10 max-sm:block'>
          <div className='rounded-lg shadow-lg shadow-blue-500/20 p-8 '>
            <h1 className='text-2xl font-bold mb-4'>Task Manager Saas</h1>
            <p className='text-gray-600 mb-[100px]'>Welcome back! Please Register for new account.</p>
            
            <Formik
              initialValues={{ email: '', username: '',password: '' }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={registerSchema}
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
                    <FaUser className="absolute left-3 top-7 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder={`Username`}
                      value={values.username}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
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
                  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 w-full mt-4 cursor-pointer shadow-2xl focus:ring-blue-500">
                    Register
                  </button>
                  <p className='pt-4 text-[14px] text-gray-600 text-left'>You Already have an account here? <a href="/" className='text-blue-400'>login here</a></p>
                </form>
              )}
            </Formik>
          </div>
          <div className='image'>
            <img src={registImg} alt="Login" className=" w-[500px] object-cover" draggable='false'/>
          </div>
    </div>
  )
}

export default Register