import { Formik } from "formik";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { registerSchema } from "../components/Auth/Register/schema";
import registImg from "../assets/Register.png";
import { useRegisterMutation } from "../features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";

const Register: React.FC = () => {
  const  [register, {isLoading}] = useRegisterMutation();
  const navigate = useNavigate();
  
  const handleSubmit = async (value: any) => {
    try {
      const response = await register(value).unwrap();
      toast.success("Registered succesfully");
      if(response?.message) {
        setTimeout(() => {
          toast.info(response.message);
        }, 2000);
      }
      setTimeout(() => {
        navigate('/')
        }, 3000);
     
    } catch (error : any) {
      toast.error(error?.data?.message || "Error occured");
    }
  }

  return (
    <div className="text-center flex items-center justify-center h-screen gap-10 max-sm:block">
      <div className="rounded-lg shadow-lg shadow-blue-500/20 p-8 max-md:h-full">
        <h1 className="text-2xl font-bold mb-4">Task Manager SaaS</h1>
        <p className="text-gray-600 mb-25">
          Welcome! Please register for a new account.
        </p>

        <Formik
          initialValues={{ email: "", username: "", password: "" }}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, errors, isValid }) => {
        
            return (
            <form
                onSubmit={(e) => {
                  handleSubmit(e);

                  if (!isValid) {
                    Object.values(errors).forEach((err) => {
                      toast.error(err as string);
                    });
                  }
                }}
              >
              {/* EMAIL */}
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

              {/* USERNAME */}
              <div className="relative">
                <FaUser className="absolute left-3 top-7 text-gray-500" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                />
              </div>

              {/* PASSWORD */}
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

              <button
                type="submit"
                disabled={isLoading}
                className={`bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-4
                  ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 cursor-pointer"}
                `}
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
              <p className="pt-4 text-sm text-gray-600 text-left">
                Already have an account?{" "}
                <a href="/" className="text-blue-400">
                  Login here
                </a>
              </p>
            </form>
            )
      }}
        </Formik>
      </div>

      <div className="max-md:hidden">
        <img
          src={registImg}
          alt="Register"
          className="w-125 object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Register;