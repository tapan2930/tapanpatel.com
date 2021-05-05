import React from 'react'
import Link from 'next/link'
import {AiOutlineAppstore} from "react-icons/ai"
import {IoReaderOutline ,IoDocumentTextOutline} from "react-icons/io5"
import {BsViewStacked} from "react-icons/bs"
import {useRouter} from "next/router"


const navLinks ={ 
    baseUrl: "/admin/",
    data : [
    {
        value: "Projects",
        route: "projects",
        icon: <AiOutlineAppstore />,
        status: "true"
    },
    {
        value: "Blogs",
        route: "blogs",
        icon: <IoReaderOutline />,
        status: true
    },
    {
        value: "Resources",
        route: "resources",
        icon: <BsViewStacked />,
        status:true
    },
    {
        value: "Resume",
        route: "resume",
        icon: <IoDocumentTextOutline />,
        status:true
    }
]}

const AdminSidebar :React.FC = ():React.ReactElement => {
    const router = useRouter()

    const activeRouterStyle = (currentRoute:string)=>{
        return (router.pathname  === currentRoute) ? "text-teal-400 bg-gray-800" : ""
    }


    return (
        <div className="bg-gray-900 h-screen">
            <div className="text-gray-50">
                {
                    navLinks.data.map((nav,id)=>{
                        const route = navLinks.baseUrl+nav.route
                        return nav.status ? (
                            <div id={`${id}`}>
                                <Link href={route}>
                                    <a className={`${activeRouterStyle(route)} py-3 px-4 w-full flex items-center hover:bg-gray-800  transition-colors duration-150 ease-linear rounded-r-3xl `}>
                                        <span className="mr-2 text-xl">{nav.icon}</span>
                                        {nav.value}
                                    </a>
                                </Link>
                            </div>
                        ) : ""
                    })
                }
            </div>
        </div>
    )
}

export default AdminSidebar