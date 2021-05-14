import React from "react"
import IconButton from "@components/Button/IconButton"
import userProfile from "userProfile";
import { highlight } from "@utils/highlight";
import MyImage from "@components/ImageLazyLoad/index"


const UserProfile = ()=>{
    const profile = {
      alt: "Tapan Patel",
      src: userProfile.profile,
      placeholderSrc:userProfile.placeholder,
      style: {"width":"256px"},
      wrapperStyle: ""
    }

    return (
        <div className="flex flex-col   h-screen box-content">
          <div className="flex items-center relative h-16">
            <div className="inline-flex justify-center items-center absolute  top-1 left-3 w-16 h-16">
              <img width="50" src="/assets/logo.svg" alt="logo" />
            </div>
            <div className="m-auto flex items-center">
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
          <div className=" flex flex-col items-center flex-grow  justify-center  ">
            <div className="rounded-full w-64 h-64 overflow-hidden bg-secondary opacity-90 shadow-md border border-secondary inline-block mx-auto mb-10 md:mb-16">
              {/* <img src={userProfile.profile} alt="profile" width="256px" /> */}
              <MyImage {...profile} />
            </div>
            <div className=" bg-tertiary frost shadow-md px-12 py-4 text-center xl:w-96 border border-secondary border-dotted rounded-lg ">
              <h1 className="text-3xl xl:text-4xl tracking-wide pb-2">
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