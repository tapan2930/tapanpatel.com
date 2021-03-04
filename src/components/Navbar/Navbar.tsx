import Link from "next/link"
import React, {useState} from "react";
import IconButton from "@components/Button/IconButton";
import Button from "@components/Button/Button";
import userProfile from "userProfile";
import {AiOutlineClose} from "react-icons/ai"
import {BiMenu} from "react-icons/bi"
import {navbarData} from "./navbarData"


const Navbar = ()=> {
  const [navToggle,setNavToggle] = useState(false)
  const menuOnClickHandler = (toggle:boolean) => setNavToggle(toggle)

    return(
        <header className={`bg-test frost sticky shadow-sm top-0 w-full text-gray-300 z-50`}>
             <div className="lg:flex lg:flex-row items-center lg:justify-between">
                <div className="flex items-center justify-between lg:justify-start">
                <div className="inline-block py-3 px-3">
              <Link href={`/`} >
                <a>
                <img width="50" src="/assets/logo.svg" alt="logo" />
                </a>
                </Link>
            </div>
            <div className="hidden lg:block">
              {userProfile.socialMediaProfile.map((socialMedia, idx) => {
                return (
                  <div id={`${idx}`} className="inline-block mx-1 text-xl">
                    <IconButton
                      text={socialMedia.service}
                      link={socialMedia.link}
                    />
                  </div>
                );
              })}
            </div>
            <div className="text-2xl mr-4 lg:hidden" onClick={()=>menuOnClickHandler(!navToggle)}>
                    {navToggle? <AiOutlineClose /> :  <BiMenu />}
                  </div>
                </div> 
               
               
               
                <div className={`${navToggle? "h-screen flex flex-col": "hidden"} lg:flex lg:flex-row `}>
                {
                navbarData.map((navData,idx)=>{
                    return (
                        <div id={`${idx}`} className=" mb-4 lg:mr-4 lg:mb-0">
                            <Button text={navData.name} link={navData.link} />
                        </div>
                    )
                })
            }
             <div className="flex justify-center w-full mx-auto lg:hidden">
              {userProfile.socialMediaProfile.map((socialMedia, idx) => {
                return (
                  <div id={`${idx}`} className="inline-block mx-1 ">
                    <IconButton
                      text={socialMedia.service}
                      link={socialMedia.link}
                    />
                  </div>
                );
              })}
            </div>
                </div>
            
               
          </div>
        </header>
    )
}


export default Navbar