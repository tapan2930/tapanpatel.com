import React from 'react'
import {PersonalInfoType} from "../../../../types/resume.Types"
import {AiFillGithub,AiFillPhone,AiFillLinkedin,AiTwotoneMail} from "react-icons/ai"
import {RiProfileFill} from "react-icons/ri"


type propType = {
    data:PersonalInfoType
}

const personalInfo :React.FC<propType> = ({data}):React.ReactElement => {
    console.log(data)

    return (
        <div className=" flex border-b justify-between border-gray-700 pb-5">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl">{data.name}</h1>
                <h2 className="text-secondary">{data.desgination}</h2>
            </div>
            <div className="flex flex-col mt-4 flex-wrap">
                {
                    data.connect.map(connect=>{
                        return(
                            <div className="pb-1  flex justify-start">{socialIcons(connect)}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const socialIcons = (connect:any) =>{
    switch(connect.name.toLowerCase()){ 
        case "phone": return   <div className="flex items-center"><span className="mr-3"><AiFillPhone /></span>{ connect.value }</div>
        case "github": return  <div><a className="flex items-center" href={connect.link} target="_blank"><span className="mr-3"><AiFillGithub /></span>{ connect.name }</a></div>
        case "linkdin/tapan2930": return <div><a className="flex items-center" href={connect.link} target="_blank"><span className="mr-3"><AiFillLinkedin /></span>{ connect.name }</a></div>
        case "email": return   <div><a className="flex items-center" href={connect.link} target="_blank"><span className="mr-3"><AiTwotoneMail /></span>{ connect.value }</a></div>
        case "website": return <div><a className="flex items-center" href={connect.link} target="_blank"><span className="mr-3"><RiProfileFill /></span>{ connect.link }</a></div>
        default: return null
    }
}

export default personalInfo