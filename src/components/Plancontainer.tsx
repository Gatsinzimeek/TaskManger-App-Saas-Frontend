import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

type Props = {
    title: string;
    description: string;
    money: number;
    offeringList: string[];
}

const Plancontainer:React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <div className='border text-[14px] text-gray-600   shadow-lg shadow-blue-500/20 rounded-2xl pt-10 p-10  bg-white'>
        <h1 className='text-lg text-blue-400'>{props.title}</h1>
        <p>{props.description}</p> 
        <div className='w-full h-px bg-gray-200 my-4'></div>
          
        
        <div className='mb-3'>
          <h1 className='text-black text-xl mt-4'>{props.money} Rwf /mon</h1>
          <p className='text-[13px]'>Pause or cancel anytime. <br /> 7 days money-back guarantee</p>
        </div>
        <div className='leading-8'>
          {
            props.offeringList.map((items,index) => (
              <div className='flex items-center gap-2' key={index}>
                  <FaCheck className='text-blue-300' />
                  <p>{items}</p>
              </div>
            ))
          }
        </div>
        {
          props.title !== "FREE" ? (
            <button className='rounded-3xl bg-blue-400  text-white p-3 pl-4 pr-4 mt-5 cursor-pointer' onClick={() => {
          navigate(`/dashboard/initiatePayment?plan=${encodeURIComponent(props.title)}&price=${props.money}`)
        }}>
          Get Started
        </button>
          ) : (
            <></>
          )
        }
        
    </div>
  )
}

export default Plancontainer;