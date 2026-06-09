import React from 'react'
import { CiHome } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoFolderOpenOutline } from "react-icons/io5";
import List from './list';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface  ListItem {
  name: string;
  link: string;
  icon: React.ReactNode;
  title: string;
}

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
    toast.success('User Logout successfull');
  }
  const list: ListItem[] = [
    { name: 'Dashboard', link: '/dashboard', icon: <CiHome size={24} />, title: 'Dashboard' },
    { name: 'Tasks', link: '/dashboard/tasks', icon: <LuListTodo size={24} />, title: 'tasks' },
    { name: 'My Wallet', link: '/dashboard/wallet', icon: <LuWallet size={24} />, title: 'wallet' },
    { name: 'Payments', link: '/dashboard/payment', icon: <IoFolderOpenOutline size={24} />, title: 'payments' },
    { name: 'Settings', link: '/dashboard/settings', icon: <HiOutlineCog6Tooth size={24} />, title: 'settings' },
 ];
  return (
    <div className='w-64 bg-white text-gray-500 pt-4 h-screen flex flex-col text-center max-sm:w-[12%]'>
        <div className='flex ml-4 items-center max-sm:m-auto'>
          <img src={logo} alt="Logo" className='w-16 rounded-2xl max-sm:w-20' />
          
          <div className='max-sm:hidden'>
              <h1 className='text-black '>TaskManager</h1>
              <p className="text-black text-[8px]">Organize. Prioritize. Achieve.</p>
          </div>
        </div>
      <ul className='mt-19'>
        {list.map((item, index) => (
          <List key={index} name={item.name} link={item.link} title={item.title}>
            {item.icon}
          </List>
        ))}
      </ul>
      <button onClick={handleLogout} className='flex shadow-blue500/20 shadow-lg cursor-pointer mt-auto items-center p-3 w-fit ml-10 bg-blue-400 max-sm:m-auto text-white rounded-2xl m-4  max-sm:w-fit'> <FaArrowRightFromBracket size={24} /> <span className='ml-2 max-sm:hidden'>Logout</span></button>
    </div>
  )
}

export default SideBar;