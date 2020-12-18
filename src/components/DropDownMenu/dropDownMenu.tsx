import React, {useState} from "react";
import { AiOutlineBgColors } from "react-icons/ai";

const DropDownMenu = ({OnChangeThemeHandler}:any) => {
    const [togglePanel,setTogglePanel]  = useState(false)
    const onThemeHandler = (value:string)=>{
       return OnChangeThemeHandler(value)
    }
  return (
    <div className="relative cursor-pointer outline-none hover:outline-none" onClick={()=>{setTogglePanel(!togglePanel)}}>
        <div className="h-10 w-10 sm:h-14 sm:w-14 text-2xl sm:text-4xl text-white shadow-xl rounded-full bg-secondary flex justify-center items-center">
          <AiOutlineBgColors />
        </div>
        {
            togglePanel && (
                <div className="absolute bg-tertiary border-secondary border-dotted border-2 shadow-2xl frost  w-32 -right-12 sm:-right-10 top-12 sm:top-16  rounded-md  outline-none hover:outline-none">
                <div className="flex flex-col text-sm mt-2">
                <div onClick={()=>{onThemeHandler("default")}} className=" flex items-center mb-2 p-2 cursor-pointer transition-all ease-out duration-100 hover:bg-secondary"><span className="w-4 h-4 mr-3  rounded-full bg-primary inline-block"></span><span>Default</span></div>
                <div onClick={()=>{onThemeHandler("whitish")}} className=" flex items-center mb-2 p-2 cursor-pointer transition-all ease-out duration-100 hover:bg-secondary"><span className="w-4 h-4 mr-3  rounded-full bg-white inline-block"></span><span>White</span></div>
                <div onClick={()=>{onThemeHandler("paper")}} className=" flex items-center mb-2 p-2 cursor-pointer transition-all ease-out duration-100 hover:bg-secondary"><span className="w-4 h-4 mr-3  rounded-full bg-amber-100 inline-block"></span><span>Paper</span></div>
                </div>
                 </div>
            )
        }
    
    </div>
  );
};

export default DropDownMenu;
