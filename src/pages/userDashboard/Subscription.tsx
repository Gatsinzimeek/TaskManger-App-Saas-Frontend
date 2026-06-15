import React from 'react'
import Plancontainer from '@/components/Plancontainer'

const Subscription:React.FC = () => {
  const ourPlan = [
  {
    title: 'Free Tier',
    description: 'Experience the excellence of our services with a handful of small projects.',
    money: 0,
    offeringList: [
      'One request at a time',
      'Two weeks design sprint',
      'Unlimited requests & revisions',
      'Up to 1 meeting per week',
      'Dev ready Figma files',
      'Unlimited Stock Photos'
    ]

  },
  {
    title: 'Premium Tier',
    description: 'Ideal for burgeoning startups seeking continuous design assistance.',
    money: 50,
    offeringList: [
      'One request at a time',
      'Two weeks design sprint',
      'Unlimited requests & revisions',
      'Up to 1 meeting per week',
      'Dev ready Figma files',
      'Unlimited Stock Photos'
    ]
  },
  {
    title: 'Pro Tier',
    description: 'Ideal choice for agencies that are committed to providing top-notch service to their clients.',
    money: 100,
    offeringList: [
      'One request at a time',
      'Two weeks design sprint',
      'Unlimited requests & revisions',
      'Up to 1 meeting per week',
      'Dev ready Figma files',
      'Unlimited Stock Photos'
    ]
  }
]
  return (
    <div className='flex flex-col gap-4  mt-10 items-center '>
        <h1 className='text-2xl '>Plan & Pricing</h1>
        <div className='flex  gap-1'>
          <span className='border-2 border-blue-300 w-8 rounded-2xl'></span>
          <span className='border-2  border-blue-300 w-1 rounded-2xl'></span>
          <span className='border-2  border-blue-300 w-8 rounded-2xl'></span>
        </div>
        <p className='text-center text-gray-500 text-[14px]'>No shady charges, no unexpected shocks! Stick to one flat fee, month after month.
          <br />No money surprises here!</p>
        <div className='flex max-lg:flex-col items-center gap-3'>
          {
            ourPlan.map((plan, index) => (
              <Plancontainer key={index} title={plan.title} description={plan.description} money={plan.money} offeringList={plan.offeringList}/>
            ))
          }
            
        </div>
    </div>
  )
}

export default Subscription