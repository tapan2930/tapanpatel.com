import React from 'react'
import { HiMenuAlt1,HiLogout } from 'react-icons/hi'

let userData = {
    name: "Tapan"
}



const AdminNavbar = ({toggleSideBar}:any):React.ReactElement => {
    const onclickMenuHandle = () =>{
        toggleSideBar()
    }

    return (
        <div className="h-14 bg-black text-gray-50 flex items-center justify-between">
            <div onClick={()=> onclickMenuHandle()}  className="text-2xl h-14 w-14 flex justify-center items-center cursor-pointer hover:text-teal-300 transition-colors duration-150"><HiMenuAlt1 /></div>
            <div className="flex items-center ">
                <div><h1 className="border-b-2 border-dotted border-teal-600">Welcome! {userData.name}</h1></div>
                <div className="h-14 w-14 flex justify-center items-center bg-gray-800 ml-2 text-2xl"><HiLogout /></div>
            </div>
            
        </div>
    )
}

export default AdminNavbar