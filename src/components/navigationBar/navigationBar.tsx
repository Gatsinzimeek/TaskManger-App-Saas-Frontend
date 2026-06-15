import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { CiBellOn } from 'react-icons/ci';
import Emptynotification from '../../assets/emptynotification.png';
import { SlClose } from "react-icons/sl";
import { useLocation } from 'react-router-dom';

const NavigationBar: React.FC = () => {

  const [showNotifications, setShowNotifications] = React.useState<boolean>(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState<boolean>(false);
  const location = useLocation().pathname.split('/');
  const userdata = localStorage.getItem('user');
  
  const user = userdata ? JSON.parse(userdata) : null
  const userFirstChar = user?.username?.charAt(0).toLocaleUpperCase() || "";
  
  console.log(userFirstChar);

  let name

  if(location.length > 2) {
     name = location[2];
  }else{
     name = location[1];
  }
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setUserMenuOpen(false);
  };
  const userToggle =  () => {
    setUserMenuOpen(!userMenuOpen);
    setShowNotifications(false);
  }

  return (
    <div className='fixed top-0 left-64 right-0 flex justify-between items-center p-4 bg-white text-black h-20 shadow-sm z-40 max-sm:left-[80px]'>        <h1 className='text-md text-gray-600 font-light'>{name.toLocaleUpperCase()}</h1>
        <div className='flex items-center gap-4'>
          <div className="relative max-md:hidden "><input type="text" placeholder="Search..." className='bg-gray-50 text-gray-400 placeholder:text-gray-400 focus:outline-none pl-10 w-[260px] rounded-xl p-2' /><button className='cursor-pointer'><FaSearch className='absolute left-5 top-1/2 transform -translate-y-1/2 font-bold text-blue-500' /></button></div>
            <span className='cursor-pointer relative' onClick={toggleNotifications}>
              <CiBellOn className='text-gray-400' size={24} color='blue'/>
              <span className="absolute top-1 right-1 bg-red-400 text-white rounded-full w-2 h-2 flex items-center justify-center text-xs"></span>
            </span>
            <span className="cursor-pointer text-2xl bg-blue-500 text-white rounded-full w-10 h-10 flex items-center m-auto justify-center" onClick={userToggle}>
              {
                userFirstChar
              }
            </span>
      </div>
      <div className={`absolute right-4 top-22 ${showNotifications && !userMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-lg p-4 w-64`}>
        <h4 className="text-gray-400 text-center">
          <span>Empty notifications</span>
          <img src={Emptynotification} alt="Empty Notifications" className='w-full mt-4' />
        </h4>
        <button className="absolute top-2 right-2 cursor-pointer" onClick={toggleNotifications}>
          <SlClose size={18}  color='red'/>
        </button>
      </div>
      <div className={`absolute right-4 top-22 ${!showNotifications && userMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-lg p-4 w-64`}>
          <h4>Hi! {user.username}</h4>
          <p className="text-gray-400 text-sm">{user.email}</p>
          
      </div>
    </div>
  )
}

export default NavigationBar;