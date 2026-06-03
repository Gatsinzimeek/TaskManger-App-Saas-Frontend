import React from 'react'
import { CiHome } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import List from './list';
import logo from '../../assets/logo.png';

interface  ListItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const SideBar: React.FC = () => {
  const list: ListItem[] = [
    { name: 'Dashboard', link: '/dashboard', icon: <CiHome size={24} /> },
    { name: 'Tasks', link: '/tasks', icon: <LuListTodo size={24} /> },
    { name: 'My Wallet', link: '/wallet', icon: <LuWallet size={24} /> },
    { name: 'Settings', link: '/settings', icon: <HiOutlineCog6Tooth size={24} /> },
  ];
  return (
    <div className='w-64 bg-white text-gray-500 pt-4 h-screen text-center max-sm:w-[12%]'>
        <div className='flex ml-4 items-center max-sm:m-auto'>
          <img src={logo} alt="Logo" className='w-16 rounded-2xl max-sm:w-20' />
          
          <div className='max-sm:hidden'>
              <h1 className='text-black '>TaskManager</h1>
              <p className="text-black text-[8px]">Organize. Prioritize. Achieve.</p>
          </div>
        </div>
      <ul className='mt-19'>
        {list.map((item, index) => (
          <List key={index} name={item.name} link={item.link}>
            {item.icon}
          </List>
        ))}
      </ul>
      <button className='mb-2 flex  cursor-pointer mt-10 items-center text-gray-400 p-4 hover:bg-blue-400 max-sm:m-auto hover:text-white rounded-2xl m-4 pl-4 pr-5 max-sm:w-fit'> <FaArrowRightFromBracket size={24} /> <span className='ml-2 max-sm:hidden'>Logout</span></button>
    </div>
  )
}

export default SideBar;