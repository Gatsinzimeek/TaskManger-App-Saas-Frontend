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
    <div className="bg-gray-50 min-h-screen">
        <SideBar />

        <div className="ml-64 max-sm:ml-20">
            <NavigationBar />

            <main className="pt-24 p-6">
                <Outlet />
            </main>
        </div>
    </div>
    </>
  )
}

export default DashboardLayout