import React from "react";
import IconButton from "@components/Button/IconButton";
import BigButton from "@components/Button/BigButton";
import { highlight } from "@utils/highlight";


import userProfile from "userProfile";

let Header = (): JSX.Element => {
  return (
    <header>
      <div className="grid grid-cols-1 md:grid-cols-12 hero-bg h-screen overflow-y-auto">
        <div className="col-span-5 border-dashed border-secondary">
         
          <div className="flex items-center">
            <div className="inline-block">
              <img src="/assets/logo.svg" alt="logo" />
            </div>
            <div className=" flex justify-center w-9/12 md:relative -left-10 md:m-auto ">
              {userProfile.socialMediaProfile.map((socialMedia, idx) => {
               
                return (
                 
                  <div className="inline-block mx-1 text-lg " id={`${idx}`}>
                    <IconButton
                      text={socialMedia.service}
                      link={socialMedia.link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col items-center mt-6 md:mt-16">
            <div className="rounded-full overflow-hidden inline-block mx-auto mb-10 md:mb-16">
              <img src={userProfile.profile} alt="profile" width="250px" />
            </div>
            <div className=" border bg-tertiary frost border-secondary px-12 py-4 text-center md:w-96 ">
              <h1 className="text-4xl tracking-wide pb-2">
                {userProfile.name}
              </h1>
              <h2 className="text-secondary tracking-wider leading-loose text-sm">
                {userProfile.designation}
              </h2>
            </div>

            <div className="my-14">
              <span
                className="text-2xl block pb-2"
                dangerouslySetInnerHTML={{
                  __html: highlight(userProfile.setLinePrimary),
                }}
              />
              <span>{userProfile.setLineSecondary}</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className=" p-2 md:p-0 col-span-7   flex items-center justify-center">
          <div className="grid grid-cols-1 m-2 md:m-0 md:grid-cols-2 w-full md:w-auto gap-4">
          <div className=""> <BigButton text={"Projects"} link={"/projects"}/></div>
          <div className=""> <BigButton text={"Blogs"} link={"/blogs"}/></div>
          <div className=""><BigButton text={"About"} link={"/about"}/></div>
          <div className=""> <BigButton text={"Resume"} link={"/resume"}/></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
