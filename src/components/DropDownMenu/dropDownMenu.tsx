import React, {useState} from "react";
import { AiOutlineBgColors } from "react-icons/ai";

const DropDownMenu = ({OnChangeThemeHandler}:any) => {
    const [togglePanel,setTogglePanel]  = useState(false)
    const onThemeHandler = (value:string)=>{
       return OnChangeThemeHandler(value)
    }
  return (
    <div className="relative cursor-pointer" onClick={()=>{setTogglePanel(!togglePanel)}}>
        <div className="h-14 w-14 text-4xl text-white shadow-xl rounded-full bg-secondary flex justify-center items-center">
          <AiOutlineBgColors />
        </div>
        {
            togglePanel && (
                <div className="absolute bg-gray-600 frost text-gray-100 w-32 -right-10 top-16  rounded-md">
                <div className="flex flex-col text-sm mt-2">
                <div onClick={()=>{onThemeHandler("default")}} className=" flex items-center mb-2 p-2 cursor-pointer transition-all ease-out duration-100 hover:bg-hash"><span className="w-4 h-4 mr-3  rounded-full bg-primary inline-block"></span><span>Default</span></div>
                <div onClick={()=>{onThemeHandler("whitish")}} className=" flex items-center mb-2 p-2 cursor-pointer transition-all ease-out duration-100 hover:bg-hash"><span className="w-4 h-4 mr-3  rounded-full bg-white inline-block"></span><span>White</span></div>
                <div onClick={()=>{onThemeHandler("paper")}} className=" flex items-center mb-2 p-2 cursor-pointer transition-all ease-out duration-100 hover:bg-hash"><span className="w-4 h-4 mr-3  rounded-full bg-amber-500 inline-block"></span><span>Paper</span></div>
                </div>
                 </div>
            )
        }
    
    </div>
  );
};

export default DropDownMenu;
