import React from 'react';
import SideBar from './SideBar/SibeBar';
import NavigationBar from './navigationBar/navigationBar'
// import Footer from './footer';
import { Outlet } from 'react-router-dom';

type Props = {
    email?: string,
}

const DashboardLayout: React.FC <Props> = () => {
  return (
    <>
        <div className="flex bg-gray-50">
            <SideBar />
            <div className='flex-1 flex flex-col min-h-screen max-sm:w-[88%]'>
                <NavigationBar />
                <Outlet />
                {/* <Footer /> */}
            </div>
        </div>
    </>
  )
}

export default DashboardLayout