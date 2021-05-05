import AdminNavbar from '@components/Admin/Navbar'
import AdminSidebar from '@components/Admin/SideBar'
import React from 'react'
import { useState } from 'react'

const AdminWrapper :React.FC = ({children}):React.ReactElement => {
    const [showSideBar,setShowSideBar] = useState(true)

    const toggleSideBarHandle = () => setShowSideBar(!showSideBar)
    return (
        <div className="bg-gray-50 h-screen overflow-hidden">
           <div className="sticky top-0"><AdminNavbar toggleSideBar = {toggleSideBarHandle} /></div>
            <main className="flex ">
                <div className={`${showSideBar ? "block left-0 w-2/12  " : " -left-52 w-0 "}  relative transition-all duration-150 ease-in-out  `}><AdminSidebar /></div>
                <div className="h-screen flex-grow  text-gray-900 bg-warmGray-200">
                    {
                        children
                    }
                </div>
            </main>

        </div>
    )
}

export default AdminWrapper