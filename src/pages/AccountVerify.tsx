import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const AccountVerify: React.FC = () => {
    const navigate =  useNavigate();
    const handleClick = () => {
        navigate('/');
    }
  return (
    <div className='bg-blue-400 w-full h-[100vh] text-gray-600 leading-12 flex flex-col justify-center items-center'>
        <div className='bg-white w-[40%] h-[50%] rounded-3xl flex flex-col justify-center items-center'>
            <div className='bg-blue-400 rounded-[50%] p-8 shadow-xl'>
                <FaCheck size={50} color='white'/>
            </div>
            <h1>Verified!</h1>
            <p>You have successfully Activated Your account</p>
            <button className='bg-blue-400 p-3 cursor-pointer text-xl  text-white w-26 rounded-3xl shadow shadow-blue-500' onClick={handleClick}>OK</button>
        </div>
    </div>
  )
}

export default AccountVerify