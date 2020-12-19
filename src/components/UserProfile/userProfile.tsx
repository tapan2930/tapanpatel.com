import React from "react"
import IconButton from "@components/Button/IconButton"
import userProfile from "userProfile";
import { highlight } from "@utils/highlight";


const UserProfile = ()=>{
    return (
        <div>
                      <div className="flex items-center">
            <div className="inline-block py-3 pl-3">
              <img width="60" src="/assets/logo.svg" alt="logo" />
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
            <div className="rounded-full overflow-hidden bg-secondary opacity-90 shadow-md border border-secondary inline-block mx-auto mb-10 md:mb-16">
              <img src={userProfile.profile} alt="profile" width="250px" />
            </div>
            <div className=" bg-tertiary frost shadow-md   px-12 py-4 text-center md:w-96 ">
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
    )
}

export default UserProfile