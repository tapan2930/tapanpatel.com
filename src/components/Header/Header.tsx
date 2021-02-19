import React from "react";
import BigButton from "@components/Button/BigButton";
import UserProfile from '@components/UserProfile/userProfile'



let Header = (): JSX.Element => {
 
  return (
    <header>
      <div className="grid grid-cols-1 lg:grid-cols-12  h-screen overflow-y-auto">
        <div className="lg:col-span-5  bg-primary">
          <UserProfile />
        </div>
        {/* Right Side */}
        <div className=" p-2 lg:p-6 lg:col-span-7 hero-bg  flex items-center justify-center">
          <div className="grid grid-cols-1 m-2 lg:m-0 md:grid-cols-2  w-full md:w-auto gap-4">
          <div className=""> <BigButton text={"Projects"} link={"/projects"}/></div>
          <div className=""> <BigButton text={"Blogs"} link={"/blogs"}/></div>
          <div className=""><BigButton text={"Resources"} link={"/resources"}/></div>
          <div className=""> <BigButton text={"Resume"} link={"/resume"}/></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
