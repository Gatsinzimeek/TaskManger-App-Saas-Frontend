import React from 'react'
import { FaBell } from 'react-icons/fa';


const NavigationBar: React.FC = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white text-gray-400 '>
        <h1 className='text-xl font-bold'>Task Manager Saas</h1>
        <div className='flex items-center gap-4'>
            <FaBell className='text-gray-400' />
            <img src="https://via.placeholder.com/40" alt="Profile" className='rounded-full' />
        </div>
    </div>
  )
}

export default NavigationBar;