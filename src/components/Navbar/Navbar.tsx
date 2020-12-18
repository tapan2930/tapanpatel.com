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
        <header className={`bg-test frost shadow-md sticky top-0 w-full text-gray-300 z-50`}>
             <div className="md:flex md:flex-row items-center md:justify-between">
                <div className="flex items-center justify-between md:justify-start">
                <div className="inline-block">
              <Link href={`/`} >
                <a>
                <img src="/assets/logo.svg" alt="logo" />
                </a>
                </Link>
            </div>
            <div className="hidden md:block">
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
            <div className="text-2xl mr-4 md:hidden" onClick={()=>menuOnClickHandler(!navToggle)}>
                    {navToggle? <AiOutlineClose /> :  <BiMenu />}
                  </div>
                </div> 
               
               
               
                <div className={`${navToggle? "h-screen flex flex-col": "hidden"} md:flex md:flex-row `}>
                {
                navbarData.map((navData,idx)=>{
                    return (
                        <div id={`${idx}`} className=" mb-4 md:mr-4 md:mb-0">
                            <Button text={navData.name} link={navData.link} />
                        </div>
                    )
                })
            }
             <div className="flex justify-center w-full mx-auto md:hidden">
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