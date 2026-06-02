import React from 'react'
import { CiHome } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { HiOutlineCog6Tooth } from "react-icons/hi2";
const SideBar: React.FC = () => {
  return (
    <div className='w-64 bg-white text-gray-500 p-4 h-screen text-center'>
        <h1 className='text-black'>TaskManager</h1>
      <ul className='mt-19'>
        <Link to="/tasks"><li className='mb-2 flex bg-blue-400 p-2'>Tasks <LuListTodo /></li></Link>
        <Link to="/wallet"><li className='mb-2 flex bg-blue-400 p-2'>My wallet <LuWallet/></li></Link>
        <Link to="/settings"><li className='mb-2 flex relative bg-blue-400 p-2'><HiOutlineCog6Tooth size={20} className='absolute top-1'/> Settings </li></Link>
      </ul>
    </div>
  )
}

export default SideBar