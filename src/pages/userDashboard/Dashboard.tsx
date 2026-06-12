import React from 'react'
import BoxContainer from '@/components/BoxContainer'
import { FaTasks } from 'react-icons/fa'
const Dashboard: React.FC = () => {
  const dashboardInfo = [
    {
      title: 'Available Tasks',
      TitleNumber: 1,
      icon: <FaTasks />
    },{
      title: 'Deleted Tasks',
      TitleNumber: 10,
      icon: <FaTasks />
    },{
      title: 'Paid Tasks',
      TitleNumber: 34,
      icon: <FaTasks />
    },{
      title: 'Consumed Tasks',
      TitleNumber: 1,
      icon: <FaTasks />
    }
  ]

  return (
    <div className='m-6 mt-10'>
        <div className='mb-10'>
          <h1 className='text-xl'>Overview</h1>
          <p className='text-gray-400 text-[14px]'>Welcome back, here's what's happening with the activity on this Day.</p>
        </div>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
          {
            dashboardInfo.map((info, index) => (
              <BoxContainer title={info.title} TitleNumber={info.TitleNumber} icon= {info.icon} key={index} />
        
            ))
          }
          </div>
          
    </div>
  )
}

export default Dashboard