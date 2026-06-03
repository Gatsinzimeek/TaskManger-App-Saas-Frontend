import React from 'react';
import SideBar from '../components/SideBar/SibeBar';
import NavigationBar from '../components/navigationBar/navigationBar'
import Footer from '../components/footer';


type Props = {
    email?: string,
}

const Dashboard: React.FC <Props> = () => {
  return (
    <>
        <div className="flex bg-gray-50">
            <SideBar />
            <div className='flex-1  max-sm:w-[88%]'>
                <NavigationBar />
                <div className=' p-4'>
                    <h2 className='text-2xl font-bold mb-4'></h2>
                    <p>Here you can manage your tasks, view your calendar, and check your wallet.</p>
                </div>
                <Footer />
            </div>
        </div>
    </>
  )
}

export default Dashboard