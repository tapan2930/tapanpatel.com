import React from "react";
import BigButton from "@components/Button/BigButton";
import UserProfile from '@components/UserProfile/userProfile'


let Header = (): JSX.Element => {
  return (
    <header>
      <div className="grid grid-cols-1 md:grid-cols-12 hero-bg h-screen overflow-y-auto">
        <div className="col-span-5">
          <UserProfile />
        </div>
        {/* Right Side */}
        <div className=" p-2 md:p-0 col-span-7   flex items-center justify-center">
          <div className="grid grid-cols-1 m-2 md:m-0 md:grid-cols-2 w-full md:w-auto gap-4">
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
