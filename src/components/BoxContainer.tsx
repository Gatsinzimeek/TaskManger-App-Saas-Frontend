import React from 'react'

type Props = {
  title: string,
  TitleNumber: number,
  icon: React.ReactNode
}

const BoxContainer:React.FC<Props> = (props) => {
  return (
    <div className='bg-white p-4 w-full rounded-md shadow-md shadow-gray-200'>
        <div className='flex  justify-between items-center'>
          <h1 className='text-gray-400 text-[13px]'>{props.title}</h1>
          <span className='bg-blue-100 text-blue-400 rounded-2xl p-2 items-center'>{props.icon}</span>
        </div>
        <span className='font-bold text-gray-600 text-xl '>{props.TitleNumber}</span>
    </div>
  )
}

export default BoxContainer