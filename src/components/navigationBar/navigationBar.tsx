import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { CiBellOn } from 'react-icons/ci';



const NavigationBar: React.FC = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white text-black pt-12 pb-8 h-16 w-full shadow-sm'>
        <h1 className='text-xl  font-light'>Dashboard</h1>
        <div className='flex items-center gap-4'>
          <div className="relative max-md:hidden "><input type="text" placeholder="Search..." className='bg-gray-50 text-gray-400 placeholder:text-gray-400 focus:outline-none pl-10 w-[260px] rounded-xl p-2' /><button className='cursor-pointer'><FaSearch className='absolute left-5 top-1/2 transform -translate-y-1/2 font-bold text-blue-500' /></button></div>
            <span className='cursor-pointer relative'>
              <CiBellOn className='text-gray-400' size={24} color='blue'/>
              <span className="absolute top-1 right-1 bg-red-400 text-white rounded-full w-2 h-2 flex items-center justify-center text-xs"></span>
            </span>
            <span className="cursor-pointer text-2xl bg-blue-500 text-white rounded-full w-10 h-10 flex items-center m-auto justify-center">U</span>
      </div>
    </div>
  )
}

export default NavigationBar;