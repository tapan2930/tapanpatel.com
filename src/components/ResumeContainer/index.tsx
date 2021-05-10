import React from 'react'
import {resumeDataType} from "../../../types/resume.Types"
import PersonalInfo from './PersonalInfo'
import Education from "./Education"
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Extra from './Extra'


type propsType = {
    data: resumeDataType,
    resumeOnly:boolean
}

const ResumeContainer :React.FC<propsType> = ({data,resumeOnly}):React.ReactElement => {
    let {personalInformation,skills,educations,jobExperiences,projects,extras} = data
    
    if(resumeOnly){
        return(
        <div className="w-resume h-resume overflow-hidden p-6 ">
        <PersonalInfo data={personalInformation} />
        <div className="flex flex-col flex-wrap R-max-hieght justify-between">
               <Education data={educations} resumeOnly={true} />
               <Skills data={skills} resumeOnly={true}/> 
               <Experience data={jobExperiences} resumeOnly={true}/>
               <Projects data = {projects} resumeOnly={true}/>
               <Extra data={extras} resumeOnly={true}/>
        </div>
        
    </div>
        )
    }

    return (
        
        <div className={`w-resume  border rounded-xl border-gray-700 p-2 md:p-5 lg:p-10 my-6 lg:my-12`}>
            <PersonalInfo data={personalInformation} />
            <div className="flex flex-col  justify-between">
                   <Skills data={skills} resumeOnly={false} /> 
                   <Experience data={jobExperiences} resumeOnly={false} />
                   <Projects data = {projects} resumeOnly={false} />
                   <Education data={educations} resumeOnly={false} />
                   <Extra data={extras} resumeOnly={false} />
            </div>
            
        </div>
      
    )
}

export default ResumeContainer