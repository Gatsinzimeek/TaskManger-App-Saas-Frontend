import React from 'react'
import Plancontainer from '@/components/Plancontainer'

const Subscription:React.FC = () => {
 const ourPlan = [
  {
    title: "FREE",
    description:
      "Perfect for individuals who want to organize their daily activities and manage a limited number of tasks at no cost.",
    money: 0,
    offeringList: [
      "Up to 10 active tasks",
      "Create, edit, and delete tasks",
      "Task status tracking",
      "Dashboard overview",
      "Basic task management tools",
      "Email account support"
    ]
  },
  {
    title: "MEDIUM",
    description:
      "Designed for professionals and students who need more task capacity and better productivity management.",
    money: 20,
    offeringList: [
      "Up to 100 active tasks",
      "Unlimited task updates",
      "Advanced dashboard statistics",
      "Task filtering by status",
      "Priority customer support",
      "Faster performance and scalability"
    ]
  },
  {
    title: "PREMIUM",
    description:
      "Best choice for power users, teams, and businesses that require extensive task management capabilities.",
    money: 50,
    offeringList: [
      "Unlimited active tasks",
      "Unlimited task creation and updates",
      "Advanced analytics dashboard",
      "Priority processing",
      "Premium customer support",
      "Access to future premium features"
    ]
  }
];
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